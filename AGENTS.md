# Agent Instructions: AB Workout Timer

## Overview
A production-ready progressive web app (PWA) for interval-based workout timing with automatic workout scheduling, exercise demonstrations, and audio cues.

## Quick Deploy

```bash
# Clone and run
git clone <repo-url>
cd workout-app
python3 -m http.server 8080 --bind 0.0.0.0

# Access at http://localhost:8080
```

## Architecture

**Core Files:**
- `index.html` — Single-page PWA with embedded styles
- `app.js` — Timer logic, workout loading, state management
- `workouts.js` — Workout data array (42 workouts)
- `detailed-exercises.js` — Exercise form cues and demonstrations
- `manifest.json` — PWA config
- `sw.js.disabled` — Service worker (disabled by default)

**No build process. No dependencies. Pure vanilla JS.**

## Customization for Your User

### 1. Update Workout Schedule

Edit `app.js` line ~20 to match their workout times:

```javascript
const WORKOUT_TIMES = [
    { hour: 5, minute: 0 },   // 5:00 AM
    { hour: 8, minute: 0 },   // 8:00 AM
    { hour: 11, minute: 0 },  // 11:00 AM
    { hour: 14, minute: 0 },  // 2:00 PM
    { hour: 17, minute: 0 },  // 5:00 PM
    { hour: 20, minute: 0 }   // 8:00 PM
];
```

### 2. Customize Workout Data

`workouts.js` contains 42 workouts in this format:

```javascript
{
    name: "Workout Name",
    exercises: [
        "Exercise 1",
        "Exercise 2",
        // ... 8 exercises total
    ]
}
```

**To use their workout data:**
- Parse their workout files
- Generate `workouts.js` array
- Each workout = 8 exercises
- App auto-rotates through them based on schedule

**Generation script example:**

```python
import json
from pathlib import Path

workouts = []
for file in sorted(Path("~/.hermes/workouts").glob("*.txt")):
    exercises = [line.strip() for line in file.read_text().splitlines() if line.strip()]
    workouts.append({
        "name": file.stem.replace("_", " ").title(),
        "exercises": exercises[:8]  # First 8 exercises
    })

with open("workouts.js", "w") as f:
    f.write(f"const WORKOUTS = {json.dumps(workouts, indent=2)};")
```

### 3. Add Custom Exercises

Edit `detailed-exercises.js` to add form cues:

```javascript
const EXERCISE_DETAILS = {
    "Your Exercise Name": {
        description: "Brief description",
        cues: [
            "Form cue 1",
            "Form cue 2",
            "Safety tip"
        ]
    }
};
```

### 4. Timer Configuration

Edit `app.js` constants:

```javascript
const PREP_TIME = 30;      // Prep countdown (seconds)
const WORK_TIME = 45;      // Work interval (seconds)
const REST_TIME = 15;      // Rest interval (seconds)
```

## Features

✅ **Auto-scheduling** — Loads workout based on time of day  
✅ **Interval timer** — Prep → Work → Rest cycles  
✅ **Audio cues** — Beeps for phase transitions (toggleable)  
✅ **Exercise demos** — Form cues for each exercise  
✅ **PWA** — Installable, offline-capable  
✅ **Mobile-optimized** — Touch-friendly, prevents accidental refresh  

## Tech Stack

- **Pure vanilla JavaScript** (no framework)
- **Web Audio API** for sound
- **LocalStorage** for preferences
- **Service Worker** for offline (optional)
- **Responsive CSS** with system fonts

## Deployment Options

### Local Network
```bash
python3 -m http.server 8080 --bind 0.0.0.0
# Access via http://[local-ip]:8080
```

### Public Hosting
- **Vercel/Netlify:** Drop folder, auto-deploy
- **GitHub Pages:** Enable in repo settings
- **Cloudflare Pages:** Connect repo
- **ngrok:** `ngrok http 8080` for temporary share

### Docker
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY . .
CMD ["python3", "-m", "http.server", "8080", "--bind", "0.0.0.0"]
```

## Troubleshooting

**Audio not working:**
- Browser requires user interaction before audio
- Check mute toggle in header
- iOS Safari has strict audio policies

**Wrong workout loading:**
- Check system time/timezone
- Verify `WORKOUT_TIMES` array
- Default fallback is workout 0

**PWA not installing:**
- Requires HTTPS (except localhost)
- Check manifest.json paths
- Service worker needs valid scope

## Agent Notes

This codebase follows the "Boil the ocean" principle:
- Complete, production-ready
- No TODOs, no placeholders
- Works out of the box
- Zero dependencies
- Single-file components

The timer logic is pure state machine:
1. IDLE → START → PREP (30s countdown)
2. PREP → WORK (45s, first exercise)
3. WORK → REST (15s)
4. REST → WORK (next exercise)
5. Repeat until all exercises complete
6. COMPLETE state with summary

All timing uses `setInterval(100ms)` for smooth updates.
Audio uses Web Audio API with 440Hz sine wave beeps.
No external audio files needed.

**When adapting for a new user:**
1. Generate their `workouts.js` from their data
2. Update `WORKOUT_TIMES` to their schedule
3. Optionally add their exercises to `detailed-exercises.js`
4. Deploy and share URL

That's it. Holy shit, that's done.
