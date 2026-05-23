// Comprehensive exercise instruction database
const EXERCISE_INSTRUCTIONS = {
    "Squat thrusts": {
        steps: [
            "Start standing with feet shoulder-width apart",
            "Squat down and place both hands on the floor in front of you", 
            "Jump both feet back into a plank position",
            "Immediately jump both feet forward back to squat position",
            "Stand up to complete the rep (no jump required)"
        ],
        formCues: [
            "Keep hands planted firmly on ground during transitions",
            "Land softly when jumping feet back and forward", 
            "Maintain tight core throughout movement",
            "Keep shoulders over wrists in plank position"
        ],
        commonMistakes: [
            "Letting hips sag in plank position",
            "Landing too hard on feet", 
            "Not fully extending hips at top"
        ],
        modifications: {
            easier: "Step feet back/forward instead of jumping",
            harder: "Add a push-up when in plank position"
        },
        musclesWorked: "Full body - legs, core, shoulders, cardiovascular"
    },

    "Mountain climber + twist": {
        steps: [
            "Start in plank position with hands under shoulders",
            "Bring right knee toward left elbow in a twisting motion",
            "Return right foot to plank position", 
            "Bring left knee toward right elbow",
            "Return left foot to plank position",
            "Continue alternating in a controlled rhythm"
        ],
        formCues: [
            "Keep hips level - don't let them pike up or sag",
            "Engage core to control the twisting motion",
            "Keep shoulders stable over wrists",
            "Focus on knee-to-elbow contact"
        ],
        commonMistakes: [
            "Hips bouncing up and down",
            "Going too fast and losing form",
            "Not getting full knee-to-elbow connection"
        ],
        modifications: {
            easier: "Place hands on elevated surface like couch",
            harder: "Increase speed while maintaining form"
        },
        musclesWorked: "Core, shoulders, hip flexors, cardiovascular"
    },

    "Decline pike push-ups": {
        steps: [
            "Place feet on couch/chair, hands on floor",
            "Walk hands forward until body forms inverted V shape",
            "Lower head toward floor by bending elbows",
            "Keep elbows pointing back, not flared out",
            "Press back up to starting position",
            "Maintain pike position throughout"
        ],
        formCues: [
            "Focus weight on your hands, not feet",
            "Lower head toward hands, not straight down",
            "Keep core engaged to maintain pike shape",
            "Think 'handstand push-up' motion"
        ],
        commonMistakes: [
            "Flaring elbows too wide",
            "Not going low enough",
            "Losing pike position and turning into regular push-up"
        ],
        modifications: {
            easier: "Use lower elevation or do regular pike push-ups",
            harder: "Use higher elevation or add pause at bottom"
        },
        musclesWorked: "Shoulders, upper chest, triceps, core"
    },

    "Lateral bound": {
        steps: [
            "Stand on your left leg with slight knee bend",
            "Bound/jump sideways to the right, landing on right leg only",
            "Stick the landing with soft knee, controlling your balance",
            "Immediately bound back to the left, landing on left leg",
            "Continue bouncing side-to-side with single-leg landings",
            "Use arms for balance and momentum"
        ],
        formCues: [
            "Land softly on the ball of your foot",
            "Keep chest up and core engaged",
            "Use arms to help with balance and power",
            "Focus on sticking each landing before next jump"
        ],
        commonMistakes: [
            "Landing on both feet instead of single leg",
            "Not controlling the landing",
            "Going too fast without proper form"
        ],
        modifications: {
            easier: "Make smaller jumps or touch down with other foot for balance",
            harder: "Go for maximum distance or add a pause on each landing"
        },
        musclesWorked: "Legs, glutes, core, balance, power"
    },

    "Full burpees with clap": {
        steps: [
            "Start standing with feet shoulder-width apart",
            "Squat down and place hands on floor",
            "Jump feet back to plank position",
            "Perform one push-up (chest to floor)",
            "Jump feet forward back to squat",
            "Explode up into jump with hands clapping overhead",
            "Land softly and repeat"
        ],
        formCues: [
            "Full push-up with chest touching ground",
            "Explosive jump with full arm extension overhead",
            "Land softly from jump back into squat position",
            "Maintain rhythm but don't rush transitions"
        ],
        commonMistakes: [
            "Skipping or half-rep the push-up",
            "Not jumping high enough for clap",
            "Landing too hard from jump"
        ],
        modifications: {
            easier: "Remove push-up or jump, or step back instead of jumping",
            harder: "Add extra push-ups or tuck jump"
        },
        musclesWorked: "Full body - ultimate cardio and strength exercise"
    },

    "Mountain climbers": {
        steps: [
            "Start in plank position with hands under shoulders",
            "Bring right knee toward chest",
            "Quickly switch, extending right leg back while bringing left knee forward",
            "Continue alternating legs as if 'running in place' horizontally",
            "Maintain plank position throughout"
        ],
        formCues: [
            "Keep shoulders directly over wrists",
            "Maintain straight line from head to heels",
            "Core engaged to prevent hips from bouncing",
            "Quick foot placement, soft landings"
        ],
        commonMistakes: [
            "Hips bouncing up and down",
            "Going too fast and losing form",
            "Letting shoulders drift forward or back"
        ],
        modifications: {
            easier: "Slow down the pace or put hands on elevated surface",
            harder: "Increase speed or bring knees to outside of elbows"
        },
        musclesWorked: "Core, shoulders, hip flexors, cardiovascular"
    },

    "Push-ups": {
        steps: [
            "Start in plank position with hands slightly wider than shoulders",
            "Lower your body until chest touches the floor",
            "Keep body in straight line from head to heels",
            "Push through palms to return to starting position",
            "Fully extend arms at the top"
        ],
        formCues: [
            "Core engaged throughout - no sagging hips",
            "Lower until chest touches ground (full range)",
            "Elbows at 45-degree angle, not flared wide",
            "Look slightly ahead, not straight down"
        ],
        commonMistakes: [
            "Not going low enough (partial reps)",
            "Hips sagging or piking up",
            "Flaring elbows too wide"
        ],
        modifications: {
            easier: "Knee push-ups or hands on elevated surface",
            harder: "Feet elevated, single-arm, or add clap"
        },
        musclesWorked: "Chest, shoulders, triceps, core"
    },

    "Bodyweight squats": {
        steps: [
            "Stand with feet shoulder-width apart, toes slightly out",
            "Sit back like you're sitting in an invisible chair",
            "Lower until thighs are parallel to floor (or as low as comfortable)",
            "Keep chest up and knees tracking over toes",
            "Drive through heels to return to standing"
        ],
        formCues: [
            "Weight in heels, not toes",
            "Knees track over toes, don't cave inward",
            "Chest up, shoulders back throughout",
            "Hip hinge first, then knee bend"
        ],
        commonMistakes: [
            "Knees caving inward",
            "Not going deep enough",
            "Weight forward on toes instead of heels"
        ],
        modifications: {
            easier: "Partial range or hold onto something for balance",
            harder: "Jump squats, pulse at bottom, or single leg"
        },
        musclesWorked: "Quads, glutes, hamstrings, calves, core"
    },

    "Jumping jacks": {
        steps: [
            "Start standing with feet together, arms at sides",
            "Jump feet apart while simultaneously raising arms overhead",
            "Jump feet back together while lowering arms to sides",
            "Maintain rhythm and land softly on balls of feet",
            "Keep slight bend in knees throughout"
        ],
        formCues: [
            "Land softly on balls of feet",
            "Keep core engaged for stability",
            "Arms reach fully overhead",
            "Maintain steady rhythm"
        ],
        commonMistakes: [
            "Landing too hard (flat-footed)",
            "Not raising arms high enough",
            "Going too fast and losing coordination"
        ],
        modifications: {
            easier: "Step side to side instead of jumping",
            harder: "Increase speed or add squat jack variation"
        },
        musclesWorked: "Full body cardio, legs, shoulders, coordination"
    },

    "Plank hold": {
        steps: [
            "Start in push-up position or on forearms",
            "Keep body in straight line from head to heels",
            "Engage core muscles to prevent sagging or piking",
            "Breathe normally - don't hold your breath",
            "Hold position for specified time"
        ],
        formCues: [
            "Imagine balancing a glass of water on your back",
            "Squeeze glutes and engage core",
            "Keep neutral neck - look slightly ahead",
            "Even weight distribution on arms"
        ],
        commonMistakes: [
            "Hips sagging toward ground",
            "Hips too high (piking)",
            "Holding breath"
        ],
        modifications: {
            easier: "Knees down or hands on elevated surface",
            harder: "Single arm/leg lifts or feet elevated"
        },
        musclesWorked: "Core, shoulders, glutes, full-body stabilization"
    }
};

// Exercise difficulty and intensity ratings
const EXERCISE_RATINGS = {
    "Squat thrusts": { difficulty: 7, intensity: 8, cardio: 9 },
    "Mountain climber + twist": { difficulty: 6, intensity: 7, cardio: 8 },
    "Decline pike push-ups": { difficulty: 8, intensity: 6, cardio: 4 },
    "Lateral bound": { difficulty: 6, intensity: 7, cardio: 7 },
    "Full burpees with clap": { difficulty: 9, intensity: 10, cardio: 10 },
    "Mountain climbers": { difficulty: 5, intensity: 7, cardio: 8 },
    "Push-ups": { difficulty: 5, intensity: 5, cardio: 3 },
    "Bodyweight squats": { difficulty: 3, intensity: 4, cardio: 4 },
    "Jumping jacks": { difficulty: 2, intensity: 5, cardio: 7 },
    "Plank hold": { difficulty: 4, intensity: 5, cardio: 2 }
};