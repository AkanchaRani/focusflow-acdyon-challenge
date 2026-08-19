# FocusFlow — Decisions

## Why this approach?

I chose **FocusFlow**, a productivity-planning concept, because it allows the homepage to demonstrate a believable product rather than only describe one. The page is built with plain HTML, CSS, and JavaScript so the implementation remains small, fast, and easy to inspect under a short deadline.

I considered using a component framework, but rejected it because the page does not require complex state management or a large set of reusable application components. For this scope, plain HTML, CSS, and JavaScript keep the implementation easier to understand and maintain.

The visual direction uses a calm paper background, deep green contrast, and lime accents to support the product promise: making a busy day feel more manageable.

The homepage is intentionally structured around the product journey: a clear value proposition, an interactive plan in the hero, a larger product view, a short explanation of the workflow, and a final CTA. Example tasks are used only inside the explicitly presented product concept/demo. I did not include customer logos, testimonials, user counts, ratings, or performance claims because none can be verified.

## Main trade-off

Given the deadline, I prioritized a polished, responsive front-end prototype over a backend, authentication, persistence, or an actual AI task-ranking system.

The task-completion interaction updates the visible dashboard state in the browser only and resets on refresh. This demonstrates the intended product behavior while keeping the scope realistic and the source code understandable.

I also chose one primary interaction instead of adding excessive decorative motion: clicking a task marks it complete, recalculates progress, and recommends the next task. The `Start focus` button provides a small confirmation state.

A Konami-code/hidden-footer-star "Focus mode" overlay is included as the optional Easter egg without affecting the normal experience.

## AI use and personal verification

I used AI as a drafting partner for early content, layout ideas, and code scaffolding. I personally reviewed and adjusted the information architecture, product wording, visual hierarchy, responsive CSS, semantic buttons and labels, task-state logic, and the absence of fabricated social proof.

I tested the layout at desktop and mobile widths and verified that the navigation, task interaction, focus-session feedback, and Easter egg work without external application dependencies.
