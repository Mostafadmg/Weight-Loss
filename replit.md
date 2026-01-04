# GLP-1 Prescribing Portal

## Overview
A static frontend web application for GLP-1 prescription management and safety checks. The portal provides prescribing dashboards, safety checklists, protocols, and reference materials for healthcare professionals.

## Project Structure
- `index.html` - Main HTML entry point
- `app.js` - JavaScript application logic (~10k lines)
- `styles.css` - CSS styling (~6000 lines with enhanced modern design)
- `standalone.html` - Standalone version of the portal
- `scripts/` - Build and utility scripts
  - `build-standalone.js` - Builds standalone HTML version
  - `extract_pdf.js` - PDF extraction utility
- `SOP.md` - Standard Operating Procedures documentation
- `stepup_checklist_new.txt` - Checklist data file

## Technology Stack
- **Frontend**: Vanilla HTML, CSS, JavaScript (no framework)
- **Fonts**: Google Fonts (Poppins, Inter, Outfit, Roboto, Manrope)
- **Development Server**: serve (npm package)

## Running the Application
```bash
npm start
```
This serves the static files on port 5000.

## Deployment
- **Type**: Static site deployment
- **Public directory**: Root folder (`.`)
- Serves all static assets (HTML, CSS, JS) directly

## Features
- Prescribing Dashboard with prescription type selection
- Safety Checklists (Starting, Step-up, Repeat, Transfer)
- Protocol sections (Core Checks, SCR Screening, Previous Use Evidence, etc.)
- Reference materials (Definitions, Consultation Questions, Contraindications, etc.)
- Nevolat Specific Exclusion reference (liver/thyroid contraindications)
- BMI Calculator with medical-grade accuracy
- Email Macros
- Dark/Light theme toggle
- Font selector
- Global search functionality

## Recent Changes (December 2025)
- Enhanced UI with modern glassmorphism effects and improved color palette
- Added refined shadows, gradients, and glow effects
- Improved sidebar with gradient backgrounds and subtle lighting effects
- Enhanced navigation items with better hover states and active indicators
- Updated prescription cards with subtle gradients and hover animations
- Added comprehensive responsive breakpoints (1280px, 1024px, 768px, 480px, 360px)
- Added micro-animations (fadeInUp, fadeInScale, shimmer effects)
- Custom scrollbar styling
- Touch device optimizations
- High contrast mode support
- Improved accessibility features
- **Mobile Navigation Overhaul**:
  - Removed hamburger button
  - Added mobile bottom navigation bar with 4 tabs (Dashboard, Checklists, Protocols, More)
  - Added slide-up menu sheet for "More" option with all pages organized by category
  - Sidebar hidden on mobile (768px and below)
  - Full-width content with proper bottom padding for mobile
- Removed unused service worker registration
- **New Reference Tab: Nevolat Specific Exclusion**:
  - Critical exclusion criteria for Nevolat prescribing
  - Liver and thyroid disease contraindications
  - Prescriber verification checklist
  - Documentation requirements
- **New Tools Section: BMI Calculator**:
  - Medical-grade BMI calculation per NICE guidelines
  - Dual unit system: Metric (cm/kg) and Imperial (ft, in / st, lbs)
  - Sex and ethnicity selection
  - NICE-adjusted BMI thresholds for high-risk ethnic groups
  - GLP-1 eligibility assessment based on calculated BMI
  - BMI classification reference table with standard and NICE-adjusted values
- **Enhanced Core Checks Navigation**:
  - Expandable subnav for Core Checks with individual tabs (Consultation, ID & Age, BMI & Photo, GP Details)
  - Macro references for failed ID verification (Macro 21)
  - Macro references for failed photo verification (Macro 22)
  - Macro references for GP validation issues (Macro 27)
- **PUE (Previous Use Evidence) Macro References**:
  - Macro 13: PUE/Transfer Evidence request
  - Macro 14: Missing Information request
  - Macro 15: Evidence of Starting BMI request
  - Macro 16: PUE 2 Weeks Old notification
  - Macro 32: Combined PUE & Previous Weight Photo request (NEW)
- **Enhanced Global Search**:
  - Retinopathy added to search index (navigates to Cardiac Conditions tab)
  - Cross-page Ctrl+F navigation: prev/next buttons navigate across pages
  - Improved occurrence counter shows "X/Y in current page • Z total across site"
  - When no matches on current page, shows "0 here • X in Y pages" with navigation to first match

## Recent Changes (January 2026)
- **Keyboard Shortcuts System**:
  - Press `?` to show keyboard shortcuts help modal
  - Number keys `1-9` for quick navigation to main pages
  - `/` to focus search bar
  - `T` to toggle theme
  - `F` to open favorites panel
  - `Esc` to close dialogs and clear search
- **Favorites/Bookmarks System**:
  - Slide-out favorites panel (press `F` to open)
  - Add/remove pages as favorites with star icon
  - Favorites persist across sessions via localStorage
  - Quick navigation to favorite pages
- **Toast Notifications**:
  - Elegant slide-in toast notifications for user feedback
  - Success, error, and info notification types
  - Auto-dismiss after 3 seconds
- **Progressive Web App (PWA) Support**:
  - Service worker for offline functionality (`sw.js`)
  - Web app manifest for installability (`manifest.json`)
  - App caching for faster load times
  - Works offline after first visit
- **Enhanced Print Styles**:
  - Print-friendly layout for checklists and protocols
  - Hides navigation, overlays, and interactive elements
  - Proper page breaks for sections
  - Clean, readable output for documentation
- **Macro Copy Enhancement**:
  - One-click copy buttons for macros with visual feedback
  - Toast confirmation on successful copy
- **Color Theme Updates**:
  - SCR Screening sections use purple theme (changed from red)
  - Consistent purple accent for SCR-related checkboxes
- **Enhanced Search Navigation**:
  - Search results now automatically open the correct tab before scrolling
  - Added protocolTab mapping to search index items for accurate navigation
  - Clicking search results navigates to the exact location with proper tab activation
- **Comprehensive Periodic Review Section (6 Month Reviews)**:
  - Complete SOP-based rewrite with 9 comprehensive tabs for step-by-step prescriber guidance
  - **Overview Tab**: Medication timing (Mounjaro/Wegovy: 6 months, Nevolat: 4 months), who gets forced into review, questionnaire details, NO photo required for periodic review
  - **Step A: Triage Tab**: Urgent vs non-urgent side effects, 8-hour senior prescriber phone contact rule, PSI submission requirements
  - **Step B: 4 Checks Tab**: Weight loss checkpoint, side effects check, new conditions/meds check, compliance check with interactive checklist
  - **Side Effects Tab**: Complete list of urgent side effects (requiring 8-hour contact + PSI) and non-urgent side effects with management guidance
  - **Weight Loss Actions Tab**: Detailed decision logic for ≥5% (proceed), 3-5% (continue with justification), <3% (contact customer with call script), unchanged/increased (stop + cancel)
  - **Exemptions Tab**: Transfer exemptions (3 criteria: >7 months, no side effects, >5% loss) and treatment gap manual exemptions (>12 weeks gap, lowest dose restart, <3 months since restart)
  - **Closing Review Tab**: How to properly close reviews with documentation templates for each outcome
  - **Quick Reference Tab**: Decision flowchart cheat sheet with timing quick reference
  - **Linked Accounts Tab**: Account linking guidance for MedExpress/Levity
- **Macro Naming Updates**:
  - Macro 13: Renamed to "Previous Use Evidence And Previous BMI Verification Photo"
  - Macro 14: Renamed to "Previous Use Evidence"
  - Macro 15: Renamed to "Previous BMI Photo (StartingBMI)"
- **Standardized Macro Signatures**:
  - All macros now use consistent signature: "Kind regards, MedExpress Clinical Team"
  - Removed personalized signature format (<<Your Name>>, <<Your Role>>)

## Keyboard Shortcuts Reference
| Key | Action |
|-----|--------|
| `?` | Show keyboard shortcuts help |
| `1` | Go to Dashboard |
| `2` | Go to Checklists |
| `3` | Go to Core Checks |
| `4` | Go to SCR Screening |
| `5` | Go to Previous Use Evidence |
| `6` | Go to Macros |
| `7` | Go to Contraindications |
| `8` | Go to BMI Calculator |
| `9` | Go to Definitions |
| `/` | Focus search bar |
| `T` | Toggle theme (dark/light) |
| `F` | Open favorites panel |
| `Esc` | Close dialogs / Clear search |
