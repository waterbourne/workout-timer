// Real exercise instructions for AB's actual workouts
const ACTUAL_EXERCISE_INSTRUCTIONS = {
    "Split shuffle (fast)": "Start in split stance (one foot forward, one back). Jump and switch leg positions rapidly - front foot goes back, back foot comes forward. Keep switching legs as fast as possible while maintaining balance. Land softly on balls of feet.",

    "Mountain climber + twist": "Start in plank position. Bring right knee toward left elbow in twisting motion, return to plank. Bring left knee toward right elbow, return to plank. Keep alternating - this targets core rotation and shoulders.",

    "Decline pike push-ups (feet elevated)": "Put feet on couch/chair, hands on floor in downward dog position. Lower head toward hands by bending arms, press back up. This is like a handstand push-up prep - works shoulders hard.",

    "Lateral bound (side-to-side hops)": "Stand on left leg, jump sideways to land on right leg only. Stick the landing, then jump back to left leg. Keep bouncing side-to-side with single-leg landings - great for agility and leg strength.",

    "Full burpees with clap": "Squat down, jump back to plank, do full push-up, jump feet forward, explode up and clap hands overhead. This is the complete burpee with all components - cardio crusher.",

    "Mountain climbers": "Plank position, alternate bringing knees to chest rapidly like running in place horizontally. Keep shoulders over wrists, core tight. Fast feet, stable upper body.",

    "Push-ups": "Standard push-ups - lower chest to floor, press back up. Keep body straight as a board. If too hard, do on knees. Focus on full range of motion.",

    "Bodyweight squats": "Feet shoulder-width apart, sit back like sitting in invisible chair. Go down until thighs parallel to floor, drive through heels to stand. Keep chest up, knees track over toes.",

    "Jumping jacks": "Jump feet apart while raising arms overhead, jump feet together while lowering arms. Classic cardio move - land softly, maintain rhythm.",

    "Plank hold": "Hold push-up position (or on forearms). Body straight from head to heels. Engage core, breathe normally. Don't let hips sag or pike up.",

    "High knees": "Run in place bringing knees up to hip level. Stay light on feet, pump arms. Quick explosive knee lifts - cardio and leg strength.",

    "Bear crawl": "Hands and feet on ground, knees just off floor. Crawl forward/backward keeping knees low. Core stays tight to prevent hips swaying.",

    "Jump squats": "Regular squat but explode up into jump. Land softly back into squat position. Use arms for momentum. Builds power and strength.",

    "Wall sit": "Back against wall, slide down until thighs parallel to floor. Hold position like sitting in invisible chair. Burns the quads.",

    "Single-leg glute bridge": "Lie on back, one foot planted, other leg straight out. Lift hips by squeezing glute of planted leg. Great for glute activation.",

    "Side plank": "Lie on side, prop up on forearm, lift hips so body forms straight line. Hold position - works obliques and shoulders.",

    "Tricep dips": "Hands on chair/couch behind you, lower body by bending arms, press back up. Keep back close to chair. Works triceps hard.",

    "Sprint in place": "Run as fast as possible without moving forward. High knees, pump arms hard. Maximum effort - think finishing sprint.",

    "Calf raises": "Rise up onto toes, lower with control. Can do single-leg for more challenge. Simple but effective for calves.",

    "Lunges": "Step forward into lunge, lower back knee toward ground. Push back to standing. Keep front knee over ankle, chest up.",

    "Donkey kicks": "Hands and knees, kick one leg straight back and up keeping knee bent. Squeeze glute at top. Targets glutes specifically.",

    "Russian twists": "Sit with knees bent, lean back slightly. Rotate torso side to side touching ground beside hips. Core rotational strength.",

    "Superman": "Lie face down, lift chest and legs simultaneously by squeezing back muscles. Hold briefly, lower with control. Strengthens posterior chain.",

    "Burpees": "Squat, jump back to plank, optional push-up, jump feet to squat, stand up. Full-body movement that burns everything.",

    "Bicycle crunches": "Lie on back, bring opposite elbow to knee while extending other leg. Alternate in cycling motion. Core and coordination.",

    "Pike push-ups": "Downward dog position, lower head toward floor, press back up. Shoulder-focused push-up variation.",

    "Lateral lunges": "Step wide to one side, sit into that hip while keeping other leg straight. Return to center. Hip mobility and strength.",

    "Commandos": "Start in plank, lower to forearms one arm at a time, return to plank one arm at a time. Plank variation that's brutal.",

    "Squat pulses": "Hold bottom of squat, pulse up and down in small range. Keeps constant tension on muscles - burns like crazy.",

    "Deadlifts": "Hip hinge movement - reach toward floor keeping back straight, drive through heels to stand. Use water jugs if you have them.",

    "V-ups": "Lie on back, simultaneously bring legs and torso up to form V shape. Touch hands to feet if possible. Advanced core exercise.",

    "Star jumps": "Like jumping jacks but jump into star shape with arms and legs wide, return to standing. More explosive than regular jacks.",

    "Squat thrusts": "Squat down, jump back to plank, jump feet forward, stand up. Burpee without the push-up - still exhausting.",

    "Tuck jumps": "Jump up bringing knees to chest. Land softly and repeat. Explosive power exercise for legs.",

    "Reverse lunges": "Step back into lunge instead of forward. Same movement pattern but different balance challenge."
};

// Override the original function to use actual exercise names
function getActualInstructions(exerciseName) {
    // Clean the exercise name - remove emojis and extra descriptors
    const cleanName = exerciseName
        .replace(/[🔥💥⛰️📐🦘💣💪🏋️⭐]/g, '') // Remove emojis
        .replace(/\s*\(.*?\)\s*/g, '') // Remove parenthetical descriptions like "(fast)"
        .trim();
    
    // Try exact match first
    if (ACTUAL_EXERCISE_INSTRUCTIONS[cleanName]) {
        return ACTUAL_EXERCISE_INSTRUCTIONS[cleanName];
    }
    
    // Try partial matches
    for (const [key, value] of Object.entries(ACTUAL_EXERCISE_INSTRUCTIONS)) {
        if (cleanName.toLowerCase().includes(key.toLowerCase()) || 
            key.toLowerCase().includes(cleanName.toLowerCase())) {
            return value;
        }
    }
    
    // Return a more helpful fallback
    return `${cleanName} - Check form online or ask for demonstration. Focus on controlled movement and proper breathing.`;
}