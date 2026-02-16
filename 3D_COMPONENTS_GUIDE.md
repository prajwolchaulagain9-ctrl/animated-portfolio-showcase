# 3D Animation Components Guide

Your portfolio now includes advanced 3D animation capabilities. Here's how to use each component:

## Components Created

### 1. **Three3DBackground** - Main hero background
Animated particle system with rotating cube wireframe.

```tsx
import { Three3DBackground } from "./components/Three3DBackground";

<Suspense fallback={null}>
  <Three3DBackground />
</Suspense>
```

**Location**: Already integrated into HeroSection.tsx

**Features**:
- 3000 animated particles in 3D space
- Rotating wireframe cube
- Auto-rotating camera view
- Works as overlay with `pointer-events-none`

---

### 2. **Skill3D** - Interactive 3D skill cubes
Individual 3D cubes that scale based on skill level.

```tsx
import { Skill3D } from "./components/Skill3D";

<Skill3D skill="React" level={90} />
<Skill3D skill="Data Analysis" level={85} />
```

**Features**:
- Cubes rotate continuously
- Color-coded by skill level (green for high, red for low)
- 24x24px 3D canvas per cube
- Shows skill name and percentage

---

### 3. **Contact3DBackground** - Contact section background
Interactive 3D card that responds to mouse movement.

```tsx
import { Contact3DBackground } from "./components/Contact3DBackground";

<Contact3DBackground />
```

**Features**:
- Mouse-reactive rotation
- Metallic material with emissive glow
- 3D card animation
- Perfect for contact section headers

---

### 4. **ParticleSystem** - Customizable particle background
Flexible particle system for any section.

```tsx
import { ParticleSystem } from "./components/ParticleSystem";

<ParticleSystem count={2000} color="#a855f7" speed={1} />
```

**Props**:
- `count` - Number of particles (default: 1000)
- `color` - Particle color hex (default: "#a855f7")
- `speed` - Animation speed multiplier (default: 1)

---

### 5. **ThreeDProjectCard** - 3D project cards
Interactive 3D cards for project showcase.

```tsx
import { ThreeDProjectCard } from "./components/ThreeDProjectCard";

<ThreeDProjectCard />
```

**Features**:
- Mouse-reactive rotation
- Metallic material
- 12rem x 12rem size

---

## How to Integrate into Sections

### Add to SkillsSection
```tsx
import { Skill3D } from "./components/Skill3D";

const skills = [
  { name: "Python", level: 88 },
  { name: "SQL", level: 85 },
  // ...
];

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {skills.map(skill => (
    <Skill3D key={skill.name} skill={skill.name} level={skill.level} />
  ))}
</div>
```

### Add to ProjectsSection
```tsx
import { Canvas } from "@react-three/fiber";
import { ThreeDScene } from "./components/ThreeDScene";

// Add 3D preview for each project card
<Canvas camera={{ position: [0, 0, 3] }}>
  <ThreeDScene />
</Canvas>
```

### Add to ContactSection
```tsx
import { Contact3DBackground } from "./components/Contact3DBackground";

<Contact3DBackground />
```

---

## Performance Tips

1. **Suspend Canvas Rendering**: Always wrap Canvas components in Suspense
   ```tsx
   <Suspense fallback={null}>
     <Three3DBackground />
   </Suspense>
   ```

2. **Use Fewer Particles for Mobile**: Implement responsive particle counts
   ```tsx
   const particleCount = isMobile ? 1000 : 3000;
   <ParticleSystem count={particleCount} />
   ```

3. **Lazy Load 3D Components**:
   ```tsx
   const Three3DBackground = lazy(() => import("./Three3DBackground"));
   ```

---

## Customization

### Change Colors
All components use `#a855f7` (purple) as primary color. Change in each component:
- **Three3DBackground.tsx**: Lines 32, 51
- **Skill3D.tsx**: Line 16
- **Contact3DBackground.tsx**: Line 17
- **ParticleSystem.tsx**: Line 12

### Adjust Animation Speed
- Increase rotation speed: Change `useFrame` increment multipliers
  - `ref.current.rotation.x += 0.003` → `0.005` for faster
  - `ref.current.rotation.y += 0.005` → `0.002` for slower

### Modify Particle Density
In `Three3DBackground.tsx`, change `particlesCount`:
```tsx
const particlesCount = 3000; // increase for denser effect
```

---

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (may need fallback for older versions)
- Mobile: Reduced performance - consider lowering particle count

---

## Bundle Size Impact

Adding Three.js increases your bundle by ~400KB (gzipped ~130KB).

To optimize:
1. Use dynamic imports for 3D sections
2. Reduce particle counts on mobile
3. Use WebP for texture assets instead of PNG

---

## Next Steps

1. Customize colors to match your brand
2. Update skill data with your actual skills
3. Add more 3D elements to different sections
4. Test on mobile devices and adjust particle count
5. Consider adding 3D models (use GLTF format)

---

## Support for Further Customization

To add new 3D elements:
1. Create a new `.tsx` file in `src/components/`
2. Import `Canvas` from `@react-three/fiber`
3. Create your 3D geometry
4. Use `useFrame` for animations
5. Export as React component

Example template:
```tsx
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export function MyComponent() {
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      // Add animations here
    }
  });

  return (
    <Canvas>
      <mesh ref={ref}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color="#a855f7" />
      </mesh>
    </Canvas>
  );
}
```
