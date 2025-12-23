# Mongoose – Schema Validation & Options

## What Schema Validation Is
- Runs only inside **Mongoose**
- Does NOT create collections
- Does NOT enforce MongoDB-level rules
- Defines casting + validation behavior

## Core Validation Types
- Presence → `required`
- Type → `String`, `Number`, `Date`
- Constraints → `min`, `max`, `enum`, `match`
- Custom → `validate`

## Critical Rule (Must Remember)
- Casting happens **before** validation

Examples:
- `"21"` → 21 → passes `min`
- `"abc"` → NaN → validation fails

## `required` Gotcha
- Fails only for `null` and `undefined`
- Does NOT fail for:
  - `""`
  - `"   "`

Correct pattern for strings:
```js
email: {
  type: String,
  required: true,
  trim: true,
  minlength: 1
}
