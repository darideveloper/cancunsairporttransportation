# Design: Form Component Icons

## Overview
The goal is to integrate React Icons (from the `react-icons` library) into the `Input` and `Textarea` Astro components. This allows for a consistent look and feel across the application's forms.

## Component Implementation Detail

### Input.astro
The `Input` component will receive an `icon` prop. If provided, the icon will be rendered inside a wrapper, and the input itself will have adjusted left padding (`pl-10` instead of `pl-3`).

**Example Usage:**
```astro
---
import Input from "../../atoms/form/Input.astro";
import { FaUser } from "react-icons/fa";
---

<Input 
  name="name" 
  label="Full Name" 
  icon={FaUser} 
  placeholder="John Doe" 
  required 
/>
```

**Internal Structure Snippet:**
```astro
---
const { icon: Icon, ...props } = Astro.props;
---
<div class="relative ...">
  {Icon && (
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <Icon className="w-5 h-5 text-gray-400" />
    </div>
  )}
  <input 
    {...props} 
    class:list={[
      "...",
      Icon ? "pl-10" : "pl-3"
    ]} 
  />
</div>
```

### Textarea.astro
Similar to `Input`, the `Textarea` will support an icon. The icon will be positioned at the top-left of the textarea wrapper.

**Example Usage:**
```astro
---
import Textarea from "../../atoms/form/Textarea.astro";
import { FaComment } from "react-icons/fa";
---

<Textarea 
  name="message" 
  label="Your Message" 
  icon={FaComment} 
  placeholder="How can we help?" 
/>
```

## Technical Decisions
- **Type Safety**: The `icon` prop should be typed as `any` or a more specific React component type to allow passing functional components from `react-icons`.
- **Dynamic Padding**: Use `class:list` or template literals to conditionally apply `pl-10` vs `pl-3` based on whether `Icon` is defined. This prevents text overlap with the icon.
- **Icon Styling**: Icons should have a consistent size (e.g., `w-5 h-5`) and color (e.g., `text-gray-400` or `text-accent` on focus).
