
# Inefficient Application Analysis wit Tools and Devtools 🚀

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

## How to Use This Application

### **1. Clone the Repository**
```bash
git clone https://github.com/helabenkhalfallah/tools-devtools-app-analysis.git
cd tools-devtools-app-analysis
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

This application allows you to:

1. **Analyze Memory Leaks**:
    - Use the **Memory** tab to identify retained objects, detached DOM nodes, and closures.

2. **Evaluate Application Performance**:
    - Use the **Performance**, **Lighthouse**, and **Record** tabs to analyze rendering times, bottlenecks, and resource usage.

3. **Detect Unused Code**:
    - Use the **Coverage** and **Source** tabs to locate unused CSS and JavaScript.

4. **Inspect Network Activity**:
    - Use the **Network** tab to debug API calls, analyze load times, and spot inefficient resource usage.

5. **Analyze Bundle Size**:
    - **Vite Bundler Analyzer (`pnpm analyze`)**: Visualize the size of the app’s modules to identify oversized dependencies or inefficient packaging.
    - **[Bundlephobia](https://bundlephobia.com/)**: Check the size, treeshaking support, and dependency impact of npm packages used in the app.

6. **Assess Webpage Loading**:
    - **WebPageTest**: Run comprehensive tests on your webpage to measure real-world performance, including loading speed, render times, and third-party resource impact.

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
1. Open **Chrome DevTools**.
2. Navigate to the **Performance** tab:
    - Click "Record" and interact with the app (e.g., toggling leaky components or navigating between views).
    - Look for a continuously growing **JS Heap** size, which may indicate memory leaks.
3. Use the **Memory** tab:
    - Take a heap snapshot and analyze retained objects, closures, and detached DOM nodes.

### **2. Identify Unused Code**
1. Open **Chrome DevTools** and navigate to the **Coverage tab**:
    - Click "Start Instrument Coverage and Reload Page" to begin recording.
    - Interact with the app (e.g., navigating or triggering components).
2. Observe the report:
    - **CSS**: Look for rules that are not applied during interactions.
    - **JavaScript**: Identify functions or scripts that are loaded but never executed.
3. Export the coverage report to analyze large, unused files for optimization.

### **3. Debug Rendering Inefficiencies**
1. Open the **Performance Tab** in Chrome DevTools:
    - Click "Record" and perform app interactions (e.g., scrolling, clicking, or navigating).
2. Analyze the timeline:
    - Look for **long tasks** or **repeated layout shifts**.
    - Identify components with slow rendering or excessive re-renders.
3. Use **Flame Charts**:
    - Pinpoint functions or components consuming the most time.

### **4. Inspect Network Activity**
1. Open the **Network Tab** in Chrome DevTools:
    - Reload the app and monitor network requests.
2. Analyze API calls:
    - Check for failed or unnecessary requests.
    - Monitor response times and payload sizes.
3. Optimize resource loading:
    - Identify large or unoptimized assets (e.g., images, JavaScript bundles).
    - Ensure HTTP caching is utilized for static files.

### **5. Analyze Bundles and Dependencies**
1. Use **Vite Bundler Analyzer (`pnpm analyze`)**:
    - Visualize the size of individual modules in your bundle.
    - Identify oversized dependencies or unused packages.
2. Use **[Bundlephobia](https://bundlephobia.com/)**:
    - Analyze npm packages to detect size, treeshaking support, and dependency impact.
    - Replace heavy or unused packages with lighter alternatives if possible.

### **6. Assess Overall Page Performance**
1. Run **Lighthouse** in Chrome DevTools:
    - Analyze metrics such as Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Total Blocking Time (TBT).
    - Review optimization recommendations, such as eliminating render-blocking resources or optimizing images.
2. Use **WebPageTest**:
    - Evaluate real-world page loading speeds and resource loading patterns.
    - Compare results across multiple geographic locations for better insights.

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

This application is a demonstration of common issues:
- Memory leaks
- Inefficient rendering
- Unused code

It serves as a learning tool to better understand how to identify, debug, and fix these issues in real-world applications.

Feel free to fork the repo and experiment further!

---
