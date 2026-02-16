<!-- Quick Reference: 3D Components -->

# 🎯 3D Components Quick Reference

## ⚡ Quick Start

### Already Integrated ✅
```tsx
// HeroSection.tsx - Just refresh to see it!
<Three3DBackground />  // Animated particles + wireframe cube
```

### Ready to Add (Copy & Paste)

#### 1️⃣ Skills with 3D Cubes
```tsx
import { Skill3D } from "./components/Skill3D";

{skills.map(skill => (
  <Skill3D key={skill} skill={skill} level={90} />
))}
```
**Location**: SkillsSection.tsx  
**Result**: Rotating 3D cubes, color-coded by skill level

---

#### 2️⃣ Contact Section Background
```tsx
import { Contact3DBackground } from "./components/Contact3DBackground";

<Contact3DBackground />
```
**Location**: ContactSection.tsx  
**Result**: Mouse-reactive 3D card

---

#### 3️⃣ Particle Background
```tsx
import { ParticleSystem } from "./components/ParticleSystem";

<ParticleSystem count={2000} color="#a855f7" speed={1} />
```
**Location**: Any section  
**Result**: Customizable floating particles

---

#### 4️⃣ 3D Project Preview
```tsx
import { Canvas } from "@react-three/fiber";
import { ThreeDScene } from "./components/ThreeDScene";
import { Suspense } from "react";

<Suspense fallback={null}>
  <Canvas camera={{ position: [0, 0, 3] }}>
    <ThreeDScene />
  </Canvas>
</Suspense>
```
**Location**: ProjectCard.tsx  
**Result**: Floating orb with dynamic lighting

---

## 🎨 Customization Cheat Sheet

| What | Where | Change |
|------|-------|--------|
| Color | All `Three*` files | `#a855f7` → your color |
| Speed | All `useFrame` | `0.003` → higher/lower |
| Particles | `Three3DBackground.tsx` | `3000` → your number |
| Size | Component args | `[1, 1, 1]` → new size |

---

## 📦 Components Summary

| Name | Use For | Difficulty |
|------|---------|------------|
| Three3DBackground | Hero section | Already done ✅ |
| Skill3D | Skills showcase | ⭐ Easy |
| Contact3DBackground | Contact header | ⭐ Easy |
| ParticleSystem | Any background | ⭐ Easy |
| ThreeDScene | Project previews | ⭐ Easy |
| ThreeDProjectCard | Project cards | ⭐⭐ Medium |

---

## 🚀 Performance Settings

```tsx
// Mobile Friendly
<ParticleSystem count={1000} />  // Low end

// Desktop Optimized
<ParticleSystem count={3000} />  // Performance

// High Performance
<ParticleSystem count={5000} />  // Max quality
```

---

## 📱 Responsive Handling

```tsx
import { useMediaQuery } from "./hooks/use-mobile";

const isMobile = useMediaQuery("(max-width: 768px)");
const count = isMobile ? 1000 : 3000;

<ParticleSystem count={count} />
```

---

## 🔧 Common Changes

### Change Purple to Your Color
```tsx
// Before
color="#a855f7"
emissive="#7c3aed"

// After (e.g., Blue)
color="#3b82f6"
emissive="#1e40af"
```

### Make Animation Faster
```tsx
// Multiply the increment
ref.current.rotation.x += 0.003;  // Normal
ref.current.rotation.x += 0.006;  // 2x Faster
```

### Make Particles Denser
```tsx
// In Three3DBackground.tsx
const particlesCount = 5000;  // was 3000
```

---

## 📋 Checklist for Integration

- [ ] View 3D hero section at localhost:5173
- [ ] Add Skill3D to SkillsSection
- [ ] Add Contact3DBackground to ContactSection
- [ ] Add ParticleSystem to ProjectsSection
- [ ] Customize colors to your brand
- [ ] Test on mobile
- [ ] Build for production
- [ ] Deploy!

---

## 🔗 Quick Links

- **Main Guide**: `3D_COMPONENTS_GUIDE.md`
- **Setup Guide**: `3D_SETUP_COMPLETE.md`
- **Examples**: `src/components/EXAMPLES_3D_Integration.tsx`
- **Full README**: `README_3D_ANIMATIONS.md`

---

## ⚙️ Installed Dependencies

✅ three@latest  
✅ @react-three/fiber@latest  
✅ @react-three/drei@latest  

**Total Bundle Impact**: +130KB (gzipped)

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Black canvas | Add lighting + camera |
| Slow on mobile | Reduce particle count |
| Elements not showing | Wrap in `<Suspense>` |
| No animation | Check `useFrame` hook |

---

**Ready to use! Start customizing your portfolio with 3D animations! 🚀**
