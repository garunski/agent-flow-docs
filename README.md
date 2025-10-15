# Agent Flow

Agent Flow is a multi-model AI orchestration system that enables document-aware, DAG-driven workflows where LLMs plan and produce structured intents while separate executors perform validated actions.

## Overview

Agent Flow separates reasoning from execution, ensuring safety, minimal context, and full auditability. The system uses a directed acyclic graph (DAG) approach where different AI agents collaborate to solve complex problems through structured, auditable workflows.

### Key Principles

- **Separation of concerns**: LLMs generate plans and intents; executors act under policy
- **Minimal context**: Each step runs with just-enough inputs and document snippets
- **Auditability**: DAG, intents, validations, and effects are replayable and logged
- **Documentation-first**: Structured docs ground reasoning and decision-making
- **Safety**: Validation gates for schema, semantics, dependencies, resources, and risk

### Agent Roles

- **Planner**: Produces the DAG structure and dependencies
- **Analyzer**: Codebase analysis and impact assessment
- **Documenter**: Gathers and synthesizes documentation
- **Strategist**: Solution design and architecture decisions
- **Validator**: Enforces schema, safety policy, and compliance
- **Executor**: Applies approved intents with full logging
- **Tester**: Generates and runs tests, routes failures back
- **System**: Infrastructure and configuration management

## Documentation Site

This repository contains the documentation website for Agent Flow, showcasing real-world examples of multi-agent orchestration workflows.

### Features

- **Live Workflow Examples**: Interactive demonstrations of agent collaboration
- **Step-by-Step Documentation**: Detailed breakdown of each agent's role and actions
- **Visual Workflow Representation**: Clear visualization of DAG-driven processes
- **Audit Trail**: Complete visibility into agent decision-making and execution
