# Welcome to AuroKit

The `@aurodesignsystem/aurokit` install package is a comprehensive npm package designed to simplify the installation and management of Auro design system components and supporting libraries. It consolidates all essential Auro packages into a single installable bundle, ensuring compatibility and reducing the complexity of dependency management for developers.

## Installation

To install `@aurodesignsystem/aurokit`, run:

```bash
npm install @aurodesignsystem/aurokit -S
```

## Updating AuroKit

To update AuroKit and its dependencies, run:

```bash
npm update
```

This command will automatically apply compatible patch updates, as defined by npm’s semver handling. Major and minor updates will be installed via SEMVER changes to AuroKit itself.

## Overview

The Auro web component ecosystem is comprised of numerous npm packages, each maintained and versioned independently. While this modular structure offers flexibility, it can be challenging for developers to manage installations and maintain consistent versions across projects. `@aurodesignsystem/aurokit` addresses these challenges by providing a streamlined solution:

- **Single Installation**: One command to install all core Auro packages.
- **Version Compatibility**: Packages included in AuroKit are pre-validated by the Auro team to ensure seamless compatibility.
- **Simplified Updates**: Use `npm update` to apply patch updates automatically.

## Features

- **Ease of Installation**: Install all core Auro components with one command.
- **Validated Versions**: Ensures that the included package versions have been vetted for compatibility.
- **Streamlined Updates**: Leverage `npm update` to keep patch updates current.
- **Scheduled Release Cycle**:
  - **Quarterly Minor Releases**: Introduces new features and improvements predictably every quarter.
  - **Annual Major Releases**: Aligns with Node.js LTS updates to maintain compatibility with current development standards.

##  AuroKit Project Policy and Maintenance Guidelines

**Objective:**
AuroKit serves as a comprehensive wrapper for the Auro Design System, allowing users to install a single package to access all Auro components. This document defines the policies for updates, testing, and release cadence to ensure seamless integration and stability.

### Update and Release Policy:

1. Patch Updates:
   - Users manage patch updates via `npm update`.
   - AuroKit will not release new versions for individual component patch updates, as consumers can apply these updates independently. AuroKit's package.json uses the `~` version range for each Auro package to ensure that `npm update` will only affect PATCH releases.

2. Minor Updates:
   - All minor updates of individual Auro components must be tested in combination to confirm compatibility and system integrity.
   - AuroKit will be released with a minor version update to include these tested components.
   - Minor releases of AuroKit are limited to once per quarter.

3. Major Updates:
   - Major component updates trigger a thorough integration test across all components.
   - AuroKit will issue a major release upon successful integration of these updates.
   - Major releases of AuroKit are limited to once per year.

### Version Management:
- `npm update` will only permit patch updates for individual components to avoid unintended breaking changes.
- Minor and major updates will be strategically scheduled to maintain stability and predictability for consumers.

### Testing and Quality Assurance:
- Comprehensive testing is mandatory for all minor and major updates before release.
- Automated and manual testing protocols will be followed to ensure robustness.

This structured approach ensures AuroKit remains reliable and current, balancing innovation with stability for users.

## Roadmap

- **Quarterly Minor Updates**: Ensuring that new features and enhancements are delivered in a structured manner.
- **Annual Major Updates**: Planned in line with Node.js LTS updates to support long-term compatibility and stability.

## Support

For questions, issues, or feedback, please refer to the [Auro design system documentation](https://auro.alaskaair.com) or open an issue in this repository.

## Contributing

Contributions are encouraged! For more details, please review our [contributing guidelines](./CONTRIBUTING.md).
