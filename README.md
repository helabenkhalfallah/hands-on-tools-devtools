
# Hands-on Tools: DevTools - Inefficient Application Demo

This repository demonstrates common **memory leaks**, **inefficiencies**, and **performance issues** in React applications. It serves as a practical tool to showcase how to identify, debug, and fix these problems using **Chrome DevTools** tools, including **Lighthouse**, **Performance**, **Memory**, **Network**, **Record**, **Coverage**, and **Source** tabs.

---

## Features

### 1. **Leaky Components**
- **`LeakyTimer.tsx`**: Demonstrates a memory leak caused by an uncleared `setTimeout`.
- **`LeakyInterval.tsx`**: Simulates a memory leak due to an unhandled `setInterval`.
- **`LeakyListener.tsx`**: Illustrates a memory leak resulting from an unremoved `resize` event listener on the `window` object.

### 2. **Inefficient Rendering**
- Components like `RecipeCard.tsx` and `IngredientCard.tsx` include inefficiencies such as redundant re-renders and unnecessary computations.

### 3. **Unused Code**
- Includes examples of:
    - **Unused CSS rules** in components like `RecipeList.tsx`.
    - **Unused functions or state variables** across multiple components.

### 4. **Component Architecture**
- Components such as `RecipeHeader.tsx`, `InstructionStep.tsx`, and `RecipeBanner.tsx` highlight modularity and reusability, but also showcase potential inefficiencies.

---

## How to Use This Demo

### **1. Clone the Repository**
```bash
git clone https://github.com/helabenkhalfallah/hands-on-tools-devtools.git
cd hands-on-tools-devtools
```

### **2. Install Dependencies**
```bash
pnpm install
```

### **3. Run the Application**
```bash
pnpm dev
```

---

## Objectives

This demo app allows you to:

1. **Analyze Memory Leaks**:
    - Use the **Memory** tab to identify retained objects, detached DOM nodes, and closures.

2. **Evaluate Application Performance**:
    - Use the **Performance**, **Lighthouse**, and **Record** tabs to analyze rendering times, bottlenecks, and resource usage.

3. **Detect Unused Code**:
    - Use the **Coverage** and **Source** tabs to locate unused CSS and JavaScript.

4. **Inspect Network Activity**:
    - Use the **Network** tab to debug API calls, analyze load times, and spot inefficient resource usage.

---

## Key Components

### **Leaky Components**
| Component       | Issue                                 | Description                                           |
|------------------|--------------------------------------|-------------------------------------------------------|
| `LeakyTimer.tsx` | `setTimeout` not cleared             | Timeout holds a reference to state after unmounting. |
| `LeakyInterval.tsx` | `setInterval` not cleared          | Interval continues to update state after unmounting. |
| `LeakyListener.tsx` | Event listener not removed         | `resize` listener retains a reference to the component state. |

### **Recipe Components**
| Component          | Purpose                           | Notes                          |
|---------------------|-----------------------------------|--------------------------------|
| `RecipeHeader.tsx`  | Displays recipe metadata          | Modular and reusable.          |
| `IngredientCard.tsx`| Renders individual ingredients    | Contains rendering inefficiencies. |
| `InstructionStep.tsx` | Shows step-by-step instructions | Could be optimized further.    |
| `RecipeList.tsx`    | Lists all recipes                 | Demonstrates potential coverage issues. |

---

## How to Analyze Issues

### **1. Detect Memory Leaks**
- Open **Chrome DevTools**.
- Navigate to the **Performance** tab.
- Record interactions (e.g., toggling leaky components).
- Look for growing **JS Heap** size or retained objects.

### **2. Identify Unused Code**
- Use the **Coverage tab** in Chrome DevTools:
    - Start recording.
    - Interact with the app.
    - Observe unused CSS rules and JavaScript.

### **3. Debug Rendering Inefficiencies**
- Use the **Performance Tab**:
    - Record app interactions and look for bottlenecks.
    - Highlight slow rendering times or inefficient component updates.

### **4. Inspect Network Activity**
- Use the **Network Tab**:
    - Track API calls and load times.
    - Identify large or unnecessary resource downloads.

---

## Fixing Issues

| Issue                     | Solution                                    |
|----------------------------|--------------------------------------------|
| **Uncleared Timers**       | Use `clearTimeout` or `clearInterval` in `useEffect` cleanup functions. |
| **Unremoved Listeners**    | Use `removeEventListener` in `useEffect` cleanup functions. |
| **Unused Code**            | Remove unused CSS and dead JavaScript code. |
| **Inefficient Rendering**  | Use `React.memo`, `useCallback`, and `useMemo` to optimize rendering. |

---

## Tools for Debugging

1. **Chrome DevTools**:
    - **Lighthouse Tab**: Evaluate app performance and discover optimization suggestions.
    - **Performance Tab**: Analyze memory leaks and heap usage.
    - **Coverage Tab**: Detect unused code.
    - **Network Tab**: Inspect API and resource performance.
    - **Source Tab**: Review the source code and debug issues.

---

## Example Fix: Clearing a Timer
Here’s an example of how to fix a memory leak in `LeakyTimer.tsx`:
```tsx
useEffect(() => {
    const timeoutId: NodeJS.Timeout = setTimeout(() => {
        setMessage("Timeout Finished!");
    }, 5000);

    return () => {
        clearTimeout(timeoutId); // Cleanup to prevent leaks
    };
}, []);
```

---

## Conclusion

This application is a hands-on demonstration of common React issues:
- Memory leaks
- Inefficient rendering
- Unused code

It serves as a learning tool to better understand how to identify, debug, and fix these issues in real-world applications.

Feel free to fork the repo and experiment further!

---
