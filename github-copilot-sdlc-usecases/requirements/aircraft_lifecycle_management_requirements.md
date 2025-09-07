# Aircraft Lifecycle Management System - Core Requirements (Baseline Draft)

## 1. Purpose
Provide a concise baseline of fundamental requirements for an Aircraft Lifecycle Management (ALM) system covering identification, lifecycle state tracking, and maintenance event recording.

## 2. Scope
System supports tracking of aircraft from entry into service through retirement. Core capabilities in this baseline: register aircraft, manage lifecycle states, record maintenance events, provide audit history, and expose data for integration. Out-of-scope for this baseline: detailed part-level configuration management, flight operations analytics, predictive maintenance algorithms, regulatory submission automation.

## 3. Objectives
- Ensure each aircraft has a unique, immutable identity and minimum required descriptive attributes.
- Maintain an authoritative current lifecycle state with controlled transitions.
- Capture maintenance events with traceable origin, timestamp, classification, and impact on lifecycle state.
- Enable reliable retrieval and auditing of changes to aircraft data.

## 4. Core Domain Entities
### 4.1 Aircraft
Represents an individual airframe.
Key Attributes: AircraftId (UUID), RegistrationNumber, Manufacturer, Model, SerialNumber, EntryIntoServiceDate, CurrentLifecycleStateId (FK), Status (Active|Inactive|Retired), CreatedAt, UpdatedAt.

### 4.2 MaintenanceEvent
Represents a discrete maintenance action or inspection affecting an aircraft.
Key Attributes: MaintenanceEventId (UUID), AircraftId (FK), EventType (Inspection|Repair|Overhaul|Modification), Description, PerformedDate, RecordedDate, PerformedBy (Org/User), AffectedLifecycleStateId (optional FK), CreatedAt.

### 4.3 LifecycleState
Represents a managed state in the aircraft lifecycle.
Key Attributes: LifecycleStateId (UUID), Code (e.g., NEW, IN_SERVICE, IN_MAINT, STORED, RETIRED), Name, Description, IsTerminal (bool), CreatedAt.

## 5. Actors
- Fleet Manager: Oversees aircraft records and approves state transitions.
- Maintenance Engineer: Records maintenance events.
- Auditor: Reads historical snapshots and change logs.
- External System (Integration API Client): Consumes aircraft and maintenance data.

## 6. Functional Requirements (FR)
### 6.1 Aircraft Registration & Management
FR-001 The system SHALL allow creation of an Aircraft with mandatory attributes: RegistrationNumber, Manufacturer, Model, SerialNumber, EntryIntoServiceDate.
FR-002 The system SHALL assign and persist a system-generated globally unique AircraftId.
FR-003 The system SHALL prevent duplicate active Aircraft with the same SerialNumber.
FR-004 The system SHALL allow retrieval of an Aircraft by AircraftId or RegistrationNumber.
FR-005 The system SHALL record CreatedAt and UpdatedAt timestamps automatically.

### 6.2 Lifecycle State Management
FR-010 The system SHALL maintain a current lifecycle state for each Aircraft.
FR-011 The system SHALL restrict lifecycle state changes to an allowed transition set (e.g., NEW→IN_SERVICE, IN_SERVICE→IN_MAINT, IN_MAINT→IN_SERVICE, IN_SERVICE→STORED, STORED→IN_SERVICE, any→RETIRED).
FR-012 The system SHALL reject transitions to a new state if the target state IsTerminal = true and the Aircraft is already in a terminal state.
FR-013 The system SHALL record the timestamp and actor initiating each lifecycle state change.
FR-014 The system SHALL expose an API to retrieve the lifecycle history (chronological list of states with timestamps and actors) per Aircraft.

### 6.3 Maintenance Event Recording
FR-020 The system SHALL allow creation of a MaintenanceEvent linked to exactly one Aircraft.
FR-021 The system SHALL require EventType, PerformedDate, and PerformedBy on MaintenanceEvent creation.
FR-022 The system SHALL default RecordedDate to the system timestamp at event creation if not provided.
FR-023 The system SHALL allow optional association of a MaintenanceEvent to a target LifecycleState indicating a state change trigger.
FR-024 The system SHALL prevent deletion of a MaintenanceEvent once created (logical read-only).

### 6.4 Data Retrieval & Listing
FR-030 The system SHALL provide an API to list Aircraft with optional filters: Manufacturer, Model, Status, CurrentLifecycleState.
FR-031 The system SHALL provide an API to list MaintenanceEvents for a given Aircraft ordered by PerformedDate descending.
FR-032 The system SHALL provide pagination parameters (page number, page size) on list endpoints.

### 6.5 Audit & Integrity
FR-040 The system SHALL log every update to Aircraft attributes capturing previous and new values, timestamp, and actor.
FR-041 The system SHALL ensure each log entry is immutable once written.
FR-042 The system SHALL allow retrieval of an Aircraft's change log via API.

## 7. Non-Functional Requirements (NFR)
NFR-001 Availability: Core read APIs (get aircraft, list lifecycle history, list maintenance events) SHALL target 99.5% availability.
NFR-002 Performance: Single Aircraft retrieval SHALL have p95 latency < 300 ms under nominal load (≤ 100 concurrent requests).
NFR-003 Data Integrity: All entity identifiers SHALL use UUIDv4 preventing collisions within system scope.
NFR-004 Security: Create/update endpoints SHALL require authenticated actors with role-based authorization (Fleet Manager for lifecycle changes; Maintenance Engineer for maintenance events).
NFR-005 Auditability: All changes SHALL be traceable to an authenticated actor identity.
NFR-006 Consistency: Lifecycle state transitions SHALL be ACID within a single transaction with associated MaintenanceEvent (if any).
NFR-007 Scalability: The system SHALL support at least 5,000 Aircraft records and 200,000 MaintenanceEvents without performance degradation beyond performance targets.
NFR-008 Time Standard: All timestamps SHALL be stored in UTC with ISO 8601 format for external representation.
NFR-009 Data Retention: Records SHALL persist for ≥ 10 years unless legal hold requires longer.

## 8. Assumptions
A-001 Only whole-aircraft lifecycle states (not component-level) are in scope.
A-002 User authentication mechanism exists externally (e.g., IAM) and provides actor identity & roles.
A-003 Time synchronization is reliable (NTP-quality) so server timestamps are authoritative.
A-004 No offline/mobile disconnected mode required in this baseline.

## 9. Glossary
Aircraft: A distinct airframe tracked by the system.
Lifecycle State: Defined stage in aircraft operational life.
Maintenance Event: A recorded maintenance action affecting an aircraft.
Terminal State: A lifecycle state after which no further non-terminal transitions are permitted (e.g., RETIRED).

## 10. Traceability Seed (Template)
| Req ID | Source | Entity | Verification Method | Notes |
|--------|--------|--------|---------------------|-------|
| FR-001 | Fleet Manager | Aircraft | Test |  |
| FR-011 | Fleet Manager | LifecycleState | Test/Review | Allowed transitions set |
| FR-020 | Maintenance Engineer | MaintenanceEvent | Test |  |
| NFR-002 | Performance Goal | Aircraft | Performance Test | p95 latency |

## 11. Open Items
OI-001 Define full lifecycle state transition matrix (detailed enum + constraints).
OI-002 Define retention purge job schedule & archival mechanism.
OI-003 Clarify integration authentication token format.

---
Baseline complete. Further extensions: part configuration, predictive maintenance, regulatory compliance modules.
