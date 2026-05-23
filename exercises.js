// Exercise demonstration database
const EXERCISE_DEMOS = {
    "Squat thrusts": "Start standing, squat down and place hands on floor, jump feet back to plank position, immediately jump feet forward to squat, stand up. No push-up - just the explosive movement pattern.",
    
    "Mountain climber + twist": "Start in plank position. Alternate bringing each knee toward opposite elbow - right knee to left elbow, left knee to right elbow. Keep hips stable and core engaged.",
    
    "Decline pike push-ups": "Feet elevated on couch/chair, hands on floor in downward dog position. Lower head toward floor by bending arms, push back up. Targets shoulders and upper chest.",
    
    "Lateral bound": "Stand on one leg, jump sideways to land on other leg. Immediately jump back to starting leg. Think skater jumps side-to-side with single-leg landings.",
    
    "Full burpees with clap": "Complete burpee: squat down, jump back to plank, do push-up, jump feet to squat, jump up with hands clapping overhead. Full movement pattern.",
    
    "Mountain climbers": "Plank position, alternate driving knees to chest rapidly. Keep shoulders over wrists, maintain plank alignment. Think 'running in place' horizontally.",
    
    "Push-ups": "Standard push-up with chest touching floor, full arm extension at top. Keep body in straight line. Modify on knees if needed - form over speed.",
    
    "Bodyweight squats": "Feet shoulder-width apart, sit back like sitting in invisible chair. Keep knees behind toes, chest up, thighs parallel to floor.",
    
    "Jumping jacks": "Classic movement - jump feet apart while raising arms overhead, jump feet together while lowering arms. Land softly on balls of feet.",
    
    "Plank hold": "Hold plank position on forearms or hands. Body in straight line from head to heels. Engage core, breathe normally. Don't let hips sag or pike up.",
    
    "High knees": "Run in place bringing knees up to hip level or higher. Stay light on feet, pump arms naturally. Quick, explosive knee lifts.",
    
    "Bear crawl": "Hands and feet on ground, knees just off floor. Crawl forward/backward keeping knees low. Engage core to prevent hips from swaying.",
    
    "Jump squats": "Regular squat, but explode up into a jump. Land softly back into squat position. Use arms for momentum and balance.",
    
    "Wall sit": "Back against wall, slide down until thighs are parallel to floor. Hold position with feet planted, core engaged. Like sitting in invisible chair.",
    
    "Single-leg glute bridge": "Lie on back, one foot planted, other leg extended. Lift hips by squeezing glute of planted leg. Lower with control.",
    
    "Side plank": "Lie on side, prop up on forearm, lift hips so body forms straight line. Stack feet or stagger for easier variation. Hold position.",
    
    "Tricep dips": "Hands on chair/couch behind you, legs extended forward. Lower body by bending arms, push back up. Keep back close to chair.",
    
    "Sprint in place": "Run as fast as possible without moving forward. High knees, pump arms vigorously. Maximum intensity - think finishing sprint.",
    
    "Calf raises": "Stand tall, rise up onto toes by contracting calf muscles. Lower with control. Can do single-leg for more challenge.",
    
    "Lunges": "Step forward into lunge, lower back knee toward ground. Keep front knee over ankle. Push back to standing. Alternate legs.",
    
    "Donkey kicks": "Hands and knees on ground. Kick one leg straight back and up, keeping knee bent at 90°. Squeeze glute at top. Alternate legs.",
    
    "Russian twists": "Sit with knees bent, lean back slightly. Rotate torso side to side, touching ground beside hips. Keep feet elevated for harder version.",
    
    "Superman": "Lie face down, arms extended forward. Lift chest and legs off ground simultaneously by engaging back muscles. Hold briefly, lower with control.",
    
    "Burpees": "Squat down, jump back to plank, optional push-up, jump feet to squat, stand/jump up. Full-body explosive movement.",
    
    "Bicycle crunches": "Lie on back, hands behind head. Bring opposite elbow to knee while extending other leg. Alternate in cycling motion.",
    
    "Pike push-ups": "Downward dog position, hands and feet on ground. Lower head toward floor by bending arms, push back up. Targets shoulders.",
    
    "Lateral lunges": "Step wide to one side, sit back into that hip while keeping other leg straight. Return to center. Great for hip mobility.",
    
    "Commandos": "Start in plank, lower to forearm plank one arm at a time, return to plank one arm at a time. Alternate leading arm.",
    
    "Squat pulses": "Hold bottom of squat position, pulse up and down in small range of motion. Keep tension on muscles throughout.",
    
    "Deadlifts": "Hinge at hips, reach toward floor while keeping back straight. Drive through heels to return to standing. Use water jugs for weight if available."
};

// Additional form cues and safety tips
const EXERCISE_TIPS = {
    safety: [
        "Stop if you feel sharp pain",
        "Modify intensity based on your fitness level", 
        "Stay hydrated throughout the workout",
        "Focus on form over speed",
        "Take additional rest if needed"
    ],
    
    breathing: [
        "Exhale on exertion (the hard part)",
        "Don't hold your breath during exercises",
        "Use rest periods to normalize breathing",
        "Deep breaths during transitions"
    ],
    
    intensity: [
        "Work at 80-90% effort during work intervals",
        "Use rest periods actively - light movement",
        "Push through mental barriers safely",
        "Listen to your body's signals"
    ]
};