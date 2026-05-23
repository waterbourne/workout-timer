// Workout data loader and timer logic
class WorkoutApp {
    constructor() {
        console.log("🚀 CONSTRUCTOR STARTING - VERSION 3 (Day 2 - 2026-05-19)");
        this.currentWorkout = null;
        this.currentExercise = -1; // Start in prep phase
        console.log("🔧 Set currentExercise to:", this.currentExercise);
        this.timeLeft = 30; // 30 sec prep time
        this.isRunning = false;
        this.isPaused = false;
        this.isWorkPhase = false;
        this.exerciseTimeLeft = 45;
        this.restTimeLeft = 15;
        this.totalExercises = 0;
        this.completedExercises = 0;
        this.soundEnabled = true;
        this.timer = null;
        this.audioContext = null;
        
        this.init();
    }

    init() {
        this.loadCurrentWorkout();
        this.setupAudio();
        this.updateDisplay();
    }

    setupAudio() {
        // Create audio context for beeps
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Audio context not supported');
        }
    }

    playBeep(frequency = 800, duration = 200) {
        if (!this.soundEnabled || !this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration / 1000);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration / 1000);
    }

    loadCurrentWorkout() {
        const now = new Date();
        const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
        const hour = now.getHours();
        
        // Map to your day system (Monday = day1)
        const dayMap = [7, 1, 2, 3, 4, 5, 6]; // Sunday=7, Monday=1, etc.
        const day = dayMap[dayOfWeek];
        
        // Determine time slot based on your 4 daily workouts
        let timeSlot = '11'; // Default to 11am
        
        if (hour >= 5 && hour < 11) timeSlot = '05';      // 5-11am (mobility)
        else if (hour >= 11 && hour < 16) timeSlot = '11'; // 11am-4pm (strength A)
        else if (hour >= 16 && hour < 20) timeSlot = '16'; // 4-8pm (strength B)
        else if (hour >= 20 || hour < 5) timeSlot = '20';  // 8pm-5am (yoga)
        
        // Load workout from your system
        this.currentWorkout = WORKOUTS[`day${day}_${timeSlot}`] || this.getDefaultWorkout();
        this.totalExercises = this.currentWorkout.exercises.length;
        this.renderExerciseList();
    }

    getDefaultWorkout() {
        return {
            title: "🔥 5-MIN WORKOUT - Default",
            tip: "Push through the challenge - that's where growth happens!",
            totalTime: "5 min",
            intensity: "High", 
            format: "45 sec work / 15 sec rest",
            exercises: [
                { name: "💥 Squat thrusts", demo: "Fast burpee without the push-up. Drop down, jump back to plank, jump feet forward, stand up. Keep it explosive!" },
                { name: "⛰️ Mountain climbers", demo: "Plank position, alternate bringing knees to chest rapidly. Keep hips level, engage core throughout." },
                { name: "💪 Push-ups", demo: "Standard push-ups with full range of motion. Modify on knees if needed. Focus on form over speed." },
                { name: "🦘 Jumping jacks", demo: "Classic jumping jacks with arms overhead. Land softly, maintain rhythm throughout the interval." },
                { name: "🏋️ Bodyweight squats", demo: "Feet shoulder-width apart, sit back like sitting in a chair. Keep knees behind toes, chest up." }
            ]
        };
    }

    updateDisplay() {
        const timerDisplay = document.getElementById('timerDisplay');
        const phaseIndicator = document.getElementById('phaseIndicator');
        const progressFill = document.getElementById('progressFill');
        const currentExerciseDiv = document.getElementById('currentExercise');
        
        // Update workout info
        document.getElementById('workoutTitle').textContent = this.currentWorkout.title;
        document.getElementById('tipText').textContent = this.currentWorkout.tip;
        
        // Calculate progress
        let totalTime, elapsed;
        
        if (this.currentExercise === -1) {
            // Prep phase
            totalTime = 180;
            elapsed = 180 - this.timeLeft;
            timerDisplay.textContent = this.formatTime(this.timeLeft);
            timerDisplay.className = 'timer-display work';
            phaseIndicator.textContent = 'GET READY';
            phaseIndicator.className = 'phase-indicator phase-work';
            
            currentExerciseDiv.innerHTML = `
                <div class="exercise-name">Prepare for workout</div>
                <div class="exercise-demo">
                    <h4>🎯 Get Ready</h4>
                    <p>Position yourself in your workout space. Have water nearby. The workout will begin automatically.</p>
                </div>
            `;
        } else if (this.currentExercise >= this.totalExercises) {
            // Completed
            timerDisplay.textContent = 'DONE!';
            timerDisplay.className = 'timer-display complete';
            phaseIndicator.textContent = 'COMPLETE';
            phaseIndicator.className = 'phase-indicator phase-complete';
            
            currentExerciseDiv.innerHTML = `
                <div class="exercise-name">🎉 Workout Complete!</div>
                <div class="exercise-demo">
                    <h4>💪 Great Job!</h4>
                    <p>You crushed that workout! Take a moment to cool down and hydrate.</p>
                </div>
            `;
            
            elapsed = 1;
            totalTime = 1;
        } else {
            // Exercise phase
            const exercise = this.currentWorkout.exercises[this.currentExercise];
            
            if (this.isWorkPhase) {
                totalTime = 45;
                elapsed = 45 - this.exerciseTimeLeft;
                timerDisplay.textContent = this.exerciseTimeLeft.toString().padStart(2, '0');
                timerDisplay.className = 'timer-display work';
                phaseIndicator.textContent = 'WORK';
                phaseIndicator.className = 'phase-indicator phase-work';
                
            currentExerciseDiv.innerHTML = `
                <div class="exercise-name">${exercise.name}</div>
                <div class="exercise-demo">
                    <h4>💡 How To Do It</h4>
                    <p>${exercise.demo || this.getDetailedInstructions(exercise.name)}</p>
                </div>
            `;
            } else {
                totalTime = 15;
                elapsed = 15 - this.restTimeLeft;
                timerDisplay.textContent = this.restTimeLeft.toString().padStart(2, '0');
                timerDisplay.className = 'timer-display rest';
                phaseIndicator.textContent = 'REST';
                phaseIndicator.className = 'phase-indicator phase-rest';
                
                const nextExercise = this.currentExercise + 1 < this.totalExercises ? 
                    this.currentWorkout.exercises[this.currentExercise + 1] : null;
                
                currentExerciseDiv.innerHTML = `
                    <div class="exercise-name">💨 Rest & Recover</div>
                    <div class="exercise-demo">
                        <h4>🧘 Next Up: ${nextExercise ? nextExercise.name : 'Finished!'}</h4>
                        <p>Take deep breaths, shake it out, prepare for the next exercise.</p>
                    </div>
                `;
            }
        }
        
        // Update progress bar
        const progress = (elapsed / totalTime) * 100;
        progressFill.style.width = `${Math.min(100, Math.max(0, progress))}%`;
        
        // Update exercise list highlighting
        this.updateExerciseList();
    }

    renderExerciseList() {
        const exerciseList = document.getElementById('exerciseList');
        exerciseList.innerHTML = this.currentWorkout.exercises.map((exercise, index) => `
            <div class="exercise-item" id="exercise-${index}">
                <div class="exercise-number">${index + 1}</div>
                <div style="flex: 1;">
                    <div style="font-weight: 600; margin-bottom: 5px;">${exercise.name}</div>
                    <div style="font-size: 12px; opacity: 0.7;">45 seconds</div>
                </div>
            </div>
        `).join('');

        // Also render detailed descriptions
        this.renderExerciseDescriptions();
    }

    renderExerciseDescriptions() {
        const descriptionsContainer = document.getElementById('exerciseDescriptions');
        descriptionsContainer.innerHTML = this.currentWorkout.exercises.map((exercise, index) => {
            const instructions = exercise.demo || getActualInstructions(exercise.name);
            
            return `
                <div class="exercise-card" id="description-${index}">
                    <div class="exercise-header">
                        <div class="exercise-number">${index + 1}</div>
                        <div class="exercise-title">${exercise.name}</div>
                    </div>
                    <div class="exercise-howto">
                        <h4>📝 How To Do It</h4>
                        <div class="exercise-steps">${instructions}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    updateExerciseList() {
        // Update the compact exercise list
        for (let i = 0; i < this.totalExercises; i++) {
            const item = document.getElementById(`exercise-${i}`);
            if (!item) continue;
            
            item.className = 'exercise-item';
            if (i < this.currentExercise) {
                item.classList.add('completed');
            } else if (i === this.currentExercise && this.isRunning && !this.isPaused) {
                item.classList.add('active');
            }
        }

        // Update the detailed descriptions
        for (let i = 0; i < this.totalExercises; i++) {
            const card = document.getElementById(`description-${i}`);
            if (!card) continue;
            
            card.className = 'exercise-card';
            if (i < this.currentExercise) {
                card.classList.add('completed');
            } else if (i === this.currentExercise && this.isRunning && !this.isPaused) {
                card.classList.add('current');
            }
        }
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    start() {
        if (this.audioContext && this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
        
        this.isRunning = true;
        this.isPaused = false;
        
        document.getElementById('startBtn').style.display = 'none';
        document.getElementById('pauseBtn').style.display = 'inline-block';
        
        this.timer = setInterval(() => this.tick(), 1000);
        this.playBeep(1000, 300); // Start beep
    }

    pause() {
        this.isPaused = true;
        clearInterval(this.timer);
        
        document.getElementById('startBtn').style.display = 'inline-block';
        document.getElementById('startBtn').textContent = 'RESUME';
        document.getElementById('pauseBtn').style.display = 'none';
    }

    reset() {
        console.log("RESET CALLED - currentExercise before:", this.currentExercise);
        this.isRunning = false;
        this.isPaused = false;
        this.currentExercise = -1; // Back to prep phase
        this.timeLeft = 180;
        this.isWorkPhase = false;
        this.exerciseTimeLeft = 45;
        this.restTimeLeft = 15;
        this.completedExercises = 0;
        
        clearInterval(this.timer);
        
        document.getElementById('startBtn').style.display = 'inline-block';
        document.getElementById('startBtn').textContent = 'START';
        document.getElementById('pauseBtn').style.display = 'none';
        
        this.currentExercise = -1; // Back to prep
        this.updateDisplay();
    }

    tick() {
        if (this.isPaused) return;
        
        if (this.currentExercise === -1) {
            // Prep countdown
            this.timeLeft--;
            if (this.timeLeft <= 0) {
                this.currentExercise = 0;
                this.isWorkPhase = true;
                this.exerciseTimeLeft = 45;
                this.playBeep(1200, 500); // Exercise start beep
            } else if (this.timeLeft <= 3 && this.timeLeft > 0) {
                this.playBeep(800, 200); // Countdown beeps
            }
        } else if (this.currentExercise < this.totalExercises) {
            if (this.isWorkPhase) {
                this.exerciseTimeLeft--;
                if (this.exerciseTimeLeft <= 0) {
                    this.completedExercises++;
                    this.isWorkPhase = false;
                    this.restTimeLeft = 15;
                    this.playBeep(600, 300); // Rest start beep
                } else if (this.exerciseTimeLeft <= 3 && this.exerciseTimeLeft > 0) {
                    this.playBeep(800, 200); // Countdown beeps
                }
            } else {
                this.restTimeLeft--;
                if (this.restTimeLeft <= 0) {
                    // Move to next exercise
                    this.currentExercise++;
                    if (this.currentExercise < this.totalExercises) {
                        this.isWorkPhase = true;
                        this.exerciseTimeLeft = 45;
                        this.playBeep(1200, 500); // Next exercise beep
                    } else {
                        // Workout complete
                        this.isRunning = false;
                        clearInterval(this.timer);
                        this.playBeep(1500, 1000); // Completion fanfare
                        
                        document.getElementById('startBtn').style.display = 'inline-block';
                        document.getElementById('startBtn').textContent = 'START';
                        document.getElementById('pauseBtn').style.display = 'none';
                    }
                } else if (this.restTimeLeft <= 3 && this.restTimeLeft > 0) {
                    this.playBeep(800, 200); // Countdown beeps
                }
            }
        }
        
        this.updateDisplay();
    }

    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        document.getElementById('soundToggle').textContent = this.soundEnabled ? '🔊' : '🔇';
        
        if (this.soundEnabled) {
            this.playBeep(800, 200); // Test beep
        }
    }

    getDetailedInstructions(exerciseName) {
        // Use the actual exercise instructions for real workouts
        return getActualInstructions(exerciseName);
    }

    getFormCues(exerciseName) {
        // Clean exercise name for lookup
        const cleanName = exerciseName.replace(/[🔥💥⛰️📐🦘💣💪🏋️]/g, '').trim();
        const instructions = EXERCISE_INSTRUCTIONS[cleanName];
        
        if (instructions && instructions.formCues) {
            return instructions.formCues.join(' • ');
        }
        
        return "Focus on controlled movement and proper breathing throughout.";
    }
}

// Global functions for buttons
let app;
let selectedWorkout = null;

function toggleTimer() {
    if (!app.isRunning) {
        app.start();
    } else {
        app.pause();
    }
}

function pauseTimer() {
    app.pause();
}

function resetTimer() {
    app.reset();
}

function toggleSound() {
    app.toggleSound();
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    app = new WorkoutApp();
    
    // Sound toggle
    document.getElementById('soundToggle').addEventListener('click', toggleSound);
});

// Prevent accidental refresh during workout
window.addEventListener('beforeunload', (e) => {
    if (app && app.isRunning && !app.isPaused) {
        e.preventDefault();
        e.returnValue = '';
    }
});