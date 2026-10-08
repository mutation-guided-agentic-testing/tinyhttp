# Mutation Test Survivors

Surviving mutants (mutations that passed all tests). Each represents a potential test gap.

---

## File: `packages/accepts/src/index.ts`

### Survivor 1 — Line 7
- **ID:** `7`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 7 (col 47–71)
- **Tests completed:** 14
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send an empty response for unsupported MIME types; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Response extensions res.format(obj) should throw 406 status when invalid MIME is specified; Response extensions res.format(obj) should call `default` as a function if specified; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.types() with arguments when Accept is populated and the supplied argument is not one of the accepted types it should return false; new Accepts(req) accepts.types() with arguments should ignore invalid data
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `StringLiteral`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `const validMime = (type: unknown): boolean => typeof type === 'string'`

### Survivor 2 — Line 37
- **ID:** `33`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 37 (col 9–29)
- **Tests completed:** 16
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send an empty response for unsupported MIME types; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Response extensions res.format(obj) should throw 406 status when invalid MIME is specified; Response extensions res.format(obj) should call `default` as a function if specified; new Accepts(req) accepts.types() with arguments when Accept is not populated it should return the first option; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.types() with arguments when types(...) has a string argument it should return it; new Accepts(req) accepts.types() with arguments when Accept is populated and the supplied argument is not one of the accepted types it should return false; new Accepts(req) accepts.types() with arguments should ignore invalid data
- **Nearby killed mutants:** `BooleanLiteral`: expected 'text/plain' to strictly equal 'application/json'; `ConditionalExpression`: expected 'text/plain' to strictly equal 'application/json'

- **Original (snippet):** `if (!this.headers.accept) {`

### Survivor 3 — Line 37
- **ID:** `34`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 37 (col 31–6)
- **Tests completed:** 2
- **Covered by:** new Accepts(req) accepts.types() with arguments when Accept is not populated it should return the first option; new Accepts(req) accepts.types() with arguments when types(...) has a string argument it should return it
- **Nearby killed mutants:** `BooleanLiteral`: expected 'text/plain' to strictly equal 'application/json'; `ConditionalExpression`: expected 'text/plain' to strictly equal 'application/json'

- **Original (snippet):** `if (!this.headers.accept) {
      return mimeTypes[0]
    }`

## File: `packages/accepts/src/negotiator.ts`

### Survivor 4 — Line 20
- **ID:** `103`
- **Mutator:** `ArithmeticOperator`
- **Replacement:** `a.i + b.i`
- **Location:** Line 20 (col 23–32)
- **Tests completed:** 22
- **Covered by:** Request extensions req.accepts() should parse multiple values; Request extensions req.acceptsEncodings() should detect "Accept-Encoding" header; Request extensions req.acceptsEncodings() should parse multiple values; Request extensions req.acceptsCharsets() should parse multiple values; Negotiator charsets() should parse Accept-Charset header; Negotiator charsets() should handle array headers; Negotiator encodings() should parse Accept-Encoding header; Negotiator encodings() should sort by quality value; Negotiator encodings() should always include identity by default; Negotiator encodings() should handle array headers; Negotiator encodings() should use minQuality for implicit identity; Negotiator languages() should parse Accept-Language header; Negotiator languages() should handle language tags with subtags; Negotiator languages() should handle array headers; Negotiator mediaTypes() should parse Accept header; Negotiator mediaTypes() should handle comma inside quoted parameter; Negotiator edge cases should handle whitespace in header; Negotiator edge cases should handle duplicate entries; Negotiator edge cases should handle array headers (joined with comma); new Accepts(req) accepts.languages() with no arguments when Accept-Language is populated it should return accepted languages; new Accepts(req) accepts.types() without arguments when no argument is supplied it should return all accepted types; new Accepts(req) accepts.encodings() without arguments when Accept-Encodings is populated and no argument is supplied to encodings() it should return every accepted encoding method
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'utf-8', 'iso-8859-1', 'utf-7' ] to strictly equal [ 'utf-8', 'utf...; `ConditionalExpression`: expected [ 'utf-8', 'iso-8859-1', 'utf-7' ] to strictly equal [ 'utf-8', 'utf...; `LogicalOperator`: expected [ 'utf-8', 'iso-8859-1' ] to deeply equal [ 'iso-8859-1', 'utf-8' ]; `ConditionalExpression`: expected [ 'utf-8', 'iso-8859-1', 'utf-7' ] to strictly equal [ 'utf-8', 'utf...; `LogicalOperator`: expected [ 'utf-8', 'iso-8859-1', 'utf-7' ] to strictly equal [ 'utf-8', 'utf...

- **Original (snippet):** `return b.q - a.q || a.i - b.i || 0`

### Survivor 5 — Line 37
- **ID:** `118`
- **Mutator:** `MethodExpression`
- **Replacement:** `s`
- **Location:** Line 37 (col 31–39)
- **Tests completed:** 18
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Request extensions req.acceptsCharsets() should detect "Accept-Charset" header; Request extensions req.acceptsCharsets() should parse multiple values; Negotiator charsets() should return * when no Accept-Charset header; Negotiator charsets() should parse Accept-Charset header; Negotiator charsets() should sort by quality value; Negotiator charsets() should filter by provided charsets; Negotiator charsets() should return empty array when no match; Negotiator charsets() should handle wildcard *; Negotiator charsets() should exclude q=0 charsets; Negotiator charsets() should handle case-insensitive matching; Negotiator charsets() should handle array headers; Negotiator charsets() should handle malformed charset; new Accepts(req) accepts.charsets() with no arguments when Accept-Charset is populated it should return accepted types; new Accepts(req) accepts.charsets() with no arguments when Accept-Charset is not in request it should return *; new Accepts(req) accepts.charsets() with arguments when Accept-Charset is in the request it should prioritize according to the request order; new Accepts(req) accepts.charsets() with arguments when Accept-Charset is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.charsets() with arguments when Accept-Charset is populated and the argument is a wrong charset it should return false

- **Original (snippet):** `const spec = parseCharset(s.trim(), i)`

### Survivor 6 — Line 38
- **ID:** `120`
- **Mutator:** `ArrayDeclaration`
- **Replacement:** `["Stryker was here"]`
- **Location:** Line 38 (col 28–30)
- **Tests completed:** 1
- **Covered by:** Negotiator charsets() should handle malformed charset
- **Nearby killed mutants:** `ArrayDeclaration`: expected [] to strictly equal [ 'utf-8', 'utf-7', 'iso-8859-1' ]

- **Original (snippet):** `return spec ? [spec] : []`

### Survivor 7 — Line 47
- **ID:** `129`
- **Mutator:** `MethodExpression`
- **Replacement:** `p`
- **Location:** Line 47 (col 51–59)
- **Tests completed:** 3
- **Covered by:** Negotiator charsets() should sort by quality value; Negotiator charsets() should exclude q=0 charsets; new Accepts(req) accepts.charsets() with no arguments when Accept-Charset is populated it should return accepted types
- **Nearby killed mutants:** `OptionalChaining`: Cannot read properties of undefined (reading 'split'); `StringLiteral`: expected [ 'utf-8', 'iso-8859-1' ] to deeply equal [ 'iso-8859-1', 'utf-8' ]; `ArrowFunction`: expected [ 'utf-8', 'iso-8859-1', 'utf-7' ] to strictly equal [ 'utf-8', 'utf...; `MethodExpression`: expected [ 'utf-8', 'iso-8859-1' ] to deeply equal [ 'iso-8859-1', 'utf-8' ]

- **Original (snippet):** `const qParam = match[2]?.split(';').find((p) => p.trim().startsWith('q='))`

### Survivor 8 — Line 47
- **ID:** `130`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 47 (col 71–75)
- **Tests completed:** 3
- **Covered by:** Negotiator charsets() should sort by quality value; Negotiator charsets() should exclude q=0 charsets; new Accepts(req) accepts.charsets() with no arguments when Accept-Charset is populated it should return accepted types
- **Nearby killed mutants:** `OptionalChaining`: Cannot read properties of undefined (reading 'split'); `StringLiteral`: expected [ 'utf-8', 'iso-8859-1' ] to deeply equal [ 'iso-8859-1', 'utf-8' ]; `ArrowFunction`: expected [ 'utf-8', 'iso-8859-1', 'utf-7' ] to strictly equal [ 'utf-8', 'utf...; `MethodExpression`: expected [ 'utf-8', 'iso-8859-1' ] to deeply equal [ 'iso-8859-1', 'utf-8' ]

- **Original (snippet):** `const qParam = match[2]?.split(';').find((p) => p.trim().startsWith('q='))`

### Survivor 9 — Line 57
- **ID:** `138`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 57 (col 22–93)
- **Tests completed:** 6
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator charsets() should filter by provided charsets; Negotiator charsets() should handle wildcard *; Negotiator charsets() should handle case-insensitive matching; new Accepts(req) accepts.charsets() with arguments when Accept-Charset is in the request it should prioritize according to the request order; new Accepts(req) accepts.charsets() with arguments when Accept-Charset is populated it should prioritize according to the request order (second option)
- **Nearby killed mutants:** `ConditionalExpression`: Cannot read properties of null (reading 'q'); `ConditionalExpression`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `LogicalOperator`: Cannot read properties of null (reading 's'); `EqualityOperator`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `ConditionalExpression`: expected [] to deeply equal [ 'iso-8859-1' ]

- **Original (snippet):** `return spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0 ? spec : priority`

### Survivor 10 — Line 57
- **ID:** `139`
- **Mutator:** `EqualityOperator`
- **Replacement:** `(priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) <= 0`
- **Location:** Line 57 (col 22–93)
- **Tests completed:** 6
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator charsets() should filter by provided charsets; Negotiator charsets() should handle wildcard *; Negotiator charsets() should handle case-insensitive matching; new Accepts(req) accepts.charsets() with arguments when Accept-Charset is in the request it should prioritize according to the request order; new Accepts(req) accepts.charsets() with arguments when Accept-Charset is populated it should prioritize according to the request order (second option)
- **Nearby killed mutants:** `ConditionalExpression`: Cannot read properties of null (reading 'q'); `ConditionalExpression`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `LogicalOperator`: Cannot read properties of null (reading 's'); `EqualityOperator`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `ConditionalExpression`: expected [] to deeply equal [ 'iso-8859-1' ]

- **Original (snippet):** `return spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0 ? spec : priority`

### Survivor 11 — Line 57
- **ID:** `143`
- **Mutator:** `LogicalOperator`
- **Replacement:** `(priority.s - spec.s || priority.q - spec.q) && priority.o - spec.o`
- **Location:** Line 57 (col 23–88)
- **Tests completed:** 6
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator charsets() should filter by provided charsets; Negotiator charsets() should handle wildcard *; Negotiator charsets() should handle case-insensitive matching; new Accepts(req) accepts.charsets() with arguments when Accept-Charset is in the request it should prioritize according to the request order; new Accepts(req) accepts.charsets() with arguments when Accept-Charset is populated it should prioritize according to the request order (second option)
- **Nearby killed mutants:** `ConditionalExpression`: Cannot read properties of null (reading 'q'); `ConditionalExpression`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `LogicalOperator`: Cannot read properties of null (reading 's'); `EqualityOperator`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `ConditionalExpression`: expected [] to deeply equal [ 'iso-8859-1' ]

- **Original (snippet):** `return spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0 ? spec : priority`

### Survivor 12 — Line 57
- **ID:** `144`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 57 (col 23–65)
- **Tests completed:** 6
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator charsets() should filter by provided charsets; Negotiator charsets() should handle wildcard *; Negotiator charsets() should handle case-insensitive matching; new Accepts(req) accepts.charsets() with arguments when Accept-Charset is in the request it should prioritize according to the request order; new Accepts(req) accepts.charsets() with arguments when Accept-Charset is populated it should prioritize according to the request order (second option)
- **Nearby killed mutants:** `ConditionalExpression`: Cannot read properties of null (reading 'q'); `ConditionalExpression`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `LogicalOperator`: Cannot read properties of null (reading 's'); `EqualityOperator`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `ConditionalExpression`: expected [] to deeply equal [ 'iso-8859-1' ]

- **Original (snippet):** `return spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0 ? spec : priority`

### Survivor 13 — Line 57
- **ID:** `145`
- **Mutator:** `LogicalOperator`
- **Replacement:** `priority.s - spec.s && priority.q - spec.q`
- **Location:** Line 57 (col 23–65)
- **Tests completed:** 6
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator charsets() should filter by provided charsets; Negotiator charsets() should handle wildcard *; Negotiator charsets() should handle case-insensitive matching; new Accepts(req) accepts.charsets() with arguments when Accept-Charset is in the request it should prioritize according to the request order; new Accepts(req) accepts.charsets() with arguments when Accept-Charset is populated it should prioritize according to the request order (second option)
- **Nearby killed mutants:** `ConditionalExpression`: Cannot read properties of null (reading 'q'); `ConditionalExpression`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `LogicalOperator`: Cannot read properties of null (reading 's'); `EqualityOperator`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `ConditionalExpression`: expected [] to deeply equal [ 'iso-8859-1' ]

- **Original (snippet):** `return spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0 ? spec : priority`

### Survivor 14 — Line 59
- **ID:** `150`
- **Mutator:** `UnaryOperator`
- **Replacement:** `+1`
- **Location:** Line 59 (col 10–12)
- **Tests completed:** 8
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator charsets() should filter by provided charsets; Negotiator charsets() should return empty array when no match; Negotiator charsets() should handle wildcard *; Negotiator charsets() should handle case-insensitive matching; new Accepts(req) accepts.charsets() with arguments when Accept-Charset is in the request it should prioritize according to the request order; new Accepts(req) accepts.charsets() with arguments when Accept-Charset is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.charsets() with arguments when Accept-Charset is populated and the argument is a wrong charset it should return false
- **Nearby killed mutants:** `ObjectLiteral`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...

- **Original (snippet):** `{ o: -1, q: 0, s: 0, i: index }`

### Survivor 15 — Line 65
- **ID:** `157`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 65 (col 61–4)
- **Tests completed:** 5
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator charsets() should filter by provided charsets; Negotiator charsets() should handle case-insensitive matching; new Accepts(req) accepts.charsets() with arguments when Accept-Charset is in the request it should prioritize according to the request order; new Accepts(req) accepts.charsets() with arguments when Accept-Charset is populated it should prioritize according to the request order (second option)
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'iso-8859-1' ] to deeply equal []; `ConditionalExpression`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `EqualityOperator`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `MethodExpression`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `MethodExpression`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...

- **Original (snippet):** `if (spec.charset.toLowerCase() === charset.toLowerCase()) {
    s |= 1
  } else if (spec.charset !== '*') {`

### Survivor 16 — Line 66
- **ID:** `158`
- **Mutator:** `AssignmentOperator`
- **Replacement:** `s &= 1`
- **Location:** Line 66 (col 5–11)
- **Tests completed:** 5
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator charsets() should filter by provided charsets; Negotiator charsets() should handle case-insensitive matching; new Accepts(req) accepts.charsets() with arguments when Accept-Charset is in the request it should prioritize according to the request order; new Accepts(req) accepts.charsets() with arguments when Accept-Charset is populated it should prioritize according to the request order (second option)

- **Original (snippet):** `s |= 1`

### Survivor 17 — Line 107
- **ID:** `199`
- **Mutator:** `MethodExpression`
- **Replacement:** `s`
- **Location:** Line 107 (col 32–40)
- **Tests completed:** 17
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Request extensions req.acceptsEncodings() should detect "Accept-Encoding" header; Request extensions req.acceptsEncodings() should parse multiple values; Negotiator encodings() should return identity when no Accept-Encoding header; Negotiator encodings() should parse Accept-Encoding header; Negotiator encodings() should sort by quality value; Negotiator encodings() should filter by provided encodings; Negotiator encodings() should return empty array when no match; Negotiator encodings() should handle wildcard *; Negotiator encodings() should always include identity by default; Negotiator encodings() should exclude identity when q=0; Negotiator encodings() should handle array headers; Negotiator encodings() should use minQuality for implicit identity; new Accepts(req) accepts.encodings() with arguments when Accept-Encoding is not populated it should return false; new Accepts(req) accepts.encodings() with arguments when Accept-Encoding is populated it should prioritize according to the request order; new Accepts(req) accepts.encodings() with arguments when Accept-Encodings is populated, it should return false when supplying an invalid encoding value; new Accepts(req) accepts.encodings() without arguments when Accept-Encodings is populated and no argument is supplied to encodings() it should return every accepted encoding method

- **Original (snippet):** `const spec = parseEncoding(s.trim(), i)`

### Survivor 18 — Line 112
- **ID:** `213`
- **Mutator:** `MethodExpression`
- **Replacement:** `Math.max(min, enc.q || 1)`
- **Location:** Line 112 (col 52–77)
- **Tests completed:** 13
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Request extensions req.acceptsEncodings() should detect "Accept-Encoding" header; Request extensions req.acceptsEncodings() should parse multiple values; Negotiator encodings() should parse Accept-Encoding header; Negotiator encodings() should sort by quality value; Negotiator encodings() should filter by provided encodings; Negotiator encodings() should return empty array when no match; Negotiator encodings() should always include identity by default; Negotiator encodings() should handle array headers; Negotiator encodings() should use minQuality for implicit identity; new Accepts(req) accepts.encodings() with arguments when Accept-Encoding is populated it should prioritize according to the request order; new Accepts(req) accepts.encodings() with arguments when Accept-Encodings is populated, it should return false when supplying an invalid encoding value; new Accepts(req) accepts.encodings() without arguments when Accept-Encodings is populated and no argument is supplied to encodings() it should return every accepted encoding method
- **Nearby killed mutants:** `ArrowFunction`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `const minQuality = result.reduce((min, enc) => Math.min(min, enc.q || 1), 1)`

### Survivor 19 — Line 112
- **ID:** `214`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 112 (col 66–76)
- **Tests completed:** 13
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Request extensions req.acceptsEncodings() should detect "Accept-Encoding" header; Request extensions req.acceptsEncodings() should parse multiple values; Negotiator encodings() should parse Accept-Encoding header; Negotiator encodings() should sort by quality value; Negotiator encodings() should filter by provided encodings; Negotiator encodings() should return empty array when no match; Negotiator encodings() should always include identity by default; Negotiator encodings() should handle array headers; Negotiator encodings() should use minQuality for implicit identity; new Accepts(req) accepts.encodings() with arguments when Accept-Encoding is populated it should prioritize according to the request order; new Accepts(req) accepts.encodings() with arguments when Accept-Encodings is populated, it should return false when supplying an invalid encoding value; new Accepts(req) accepts.encodings() without arguments when Accept-Encodings is populated and no argument is supplied to encodings() it should return every accepted encoding method
- **Nearby killed mutants:** `ArrowFunction`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `const minQuality = result.reduce((min, enc) => Math.min(min, enc.q || 1), 1)`

### Survivor 20 — Line 112
- **ID:** `216`
- **Mutator:** `LogicalOperator`
- **Replacement:** `enc.q && 1`
- **Location:** Line 112 (col 66–76)
- **Tests completed:** 13
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Request extensions req.acceptsEncodings() should detect "Accept-Encoding" header; Request extensions req.acceptsEncodings() should parse multiple values; Negotiator encodings() should parse Accept-Encoding header; Negotiator encodings() should sort by quality value; Negotiator encodings() should filter by provided encodings; Negotiator encodings() should return empty array when no match; Negotiator encodings() should always include identity by default; Negotiator encodings() should handle array headers; Negotiator encodings() should use minQuality for implicit identity; new Accepts(req) accepts.encodings() with arguments when Accept-Encoding is populated it should prioritize according to the request order; new Accepts(req) accepts.encodings() with arguments when Accept-Encodings is populated, it should return false when supplying an invalid encoding value; new Accepts(req) accepts.encodings() without arguments when Accept-Encodings is populated and no argument is supplied to encodings() it should return every accepted encoding method
- **Nearby killed mutants:** `ArrowFunction`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `const minQuality = result.reduce((min, enc) => Math.min(min, enc.q || 1), 1)`

### Survivor 21 — Line 123
- **ID:** `227`
- **Mutator:** `MethodExpression`
- **Replacement:** `p`
- **Location:** Line 123 (col 51–59)
- **Tests completed:** 3
- **Covered by:** Negotiator encodings() should sort by quality value; Negotiator encodings() should exclude identity when q=0; Negotiator encodings() should use minQuality for implicit identity
- **Nearby killed mutants:** `OptionalChaining`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `StringLiteral`: expected 1 to be less than 0; `ArrowFunction`: expected 1 to be less than 0; `MethodExpression`: expected 1 to be less than 0

- **Original (snippet):** `const qParam = match[2]?.split(';').find((p) => p.trim().startsWith('q='))`

### Survivor 22 — Line 123
- **ID:** `228`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 123 (col 71–75)
- **Tests completed:** 3
- **Covered by:** Negotiator encodings() should sort by quality value; Negotiator encodings() should exclude identity when q=0; Negotiator encodings() should use minQuality for implicit identity
- **Nearby killed mutants:** `OptionalChaining`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `StringLiteral`: expected 1 to be less than 0; `ArrowFunction`: expected 1 to be less than 0; `MethodExpression`: expected 1 to be less than 0

- **Original (snippet):** `const qParam = match[2]?.split(';').find((p) => p.trim().startsWith('q='))`

### Survivor 23 — Line 133
- **ID:** `236`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 133 (col 22–93)
- **Tests completed:** 4
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator encodings() should filter by provided encodings; Negotiator encodings() should handle wildcard *; new Accepts(req) accepts.encodings() with arguments when Accept-Encoding is populated it should prioritize according to the request order
- **Nearby killed mutants:** `ConditionalExpression`: Cannot read properties of null (reading 'q'); `ConditionalExpression`: expected [] to deeply equal [ 'gzip' ]; `LogicalOperator`: Request "GET /" should have status code 200 but was 500 (body was: Cannot rea...; `EqualityOperator`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `ConditionalExpression`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...

- **Original (snippet):** `return spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0 ? spec : priority`

### Survivor 24 — Line 133
- **ID:** `237`
- **Mutator:** `EqualityOperator`
- **Replacement:** `(priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) <= 0`
- **Location:** Line 133 (col 22–93)
- **Tests completed:** 4
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator encodings() should filter by provided encodings; Negotiator encodings() should handle wildcard *; new Accepts(req) accepts.encodings() with arguments when Accept-Encoding is populated it should prioritize according to the request order
- **Nearby killed mutants:** `ConditionalExpression`: Cannot read properties of null (reading 'q'); `ConditionalExpression`: expected [] to deeply equal [ 'gzip' ]; `LogicalOperator`: Request "GET /" should have status code 200 but was 500 (body was: Cannot rea...; `EqualityOperator`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `ConditionalExpression`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...

- **Original (snippet):** `return spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0 ? spec : priority`

### Survivor 25 — Line 133
- **ID:** `241`
- **Mutator:** `LogicalOperator`
- **Replacement:** `(priority.s - spec.s || priority.q - spec.q) && priority.o - spec.o`
- **Location:** Line 133 (col 23–88)
- **Tests completed:** 4
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator encodings() should filter by provided encodings; Negotiator encodings() should handle wildcard *; new Accepts(req) accepts.encodings() with arguments when Accept-Encoding is populated it should prioritize according to the request order
- **Nearby killed mutants:** `ConditionalExpression`: Cannot read properties of null (reading 'q'); `ConditionalExpression`: expected [] to deeply equal [ 'gzip' ]; `LogicalOperator`: Request "GET /" should have status code 200 but was 500 (body was: Cannot rea...; `EqualityOperator`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `ConditionalExpression`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...

- **Original (snippet):** `return spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0 ? spec : priority`

### Survivor 26 — Line 133
- **ID:** `242`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 133 (col 23–65)
- **Tests completed:** 4
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator encodings() should filter by provided encodings; Negotiator encodings() should handle wildcard *; new Accepts(req) accepts.encodings() with arguments when Accept-Encoding is populated it should prioritize according to the request order
- **Nearby killed mutants:** `ConditionalExpression`: Cannot read properties of null (reading 'q'); `ConditionalExpression`: expected [] to deeply equal [ 'gzip' ]; `LogicalOperator`: Request "GET /" should have status code 200 but was 500 (body was: Cannot rea...; `EqualityOperator`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `ConditionalExpression`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...

- **Original (snippet):** `return spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0 ? spec : priority`

### Survivor 27 — Line 133
- **ID:** `243`
- **Mutator:** `LogicalOperator`
- **Replacement:** `priority.s - spec.s && priority.q - spec.q`
- **Location:** Line 133 (col 23–65)
- **Tests completed:** 4
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator encodings() should filter by provided encodings; Negotiator encodings() should handle wildcard *; new Accepts(req) accepts.encodings() with arguments when Accept-Encoding is populated it should prioritize according to the request order
- **Nearby killed mutants:** `ConditionalExpression`: Cannot read properties of null (reading 'q'); `ConditionalExpression`: expected [] to deeply equal [ 'gzip' ]; `LogicalOperator`: Request "GET /" should have status code 200 but was 500 (body was: Cannot rea...; `EqualityOperator`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `ConditionalExpression`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...

- **Original (snippet):** `return spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0 ? spec : priority`

### Survivor 28 — Line 135
- **ID:** `248`
- **Mutator:** `UnaryOperator`
- **Replacement:** `+1`
- **Location:** Line 135 (col 20–22)
- **Tests completed:** 7
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator encodings() should filter by provided encodings; Negotiator encodings() should return empty array when no match; Negotiator encodings() should handle wildcard *; new Accepts(req) accepts.encodings() with arguments when Accept-Encoding is not populated it should return false; new Accepts(req) accepts.encodings() with arguments when Accept-Encoding is populated it should prioritize according to the request order; new Accepts(req) accepts.encodings() with arguments when Accept-Encodings is populated, it should return false when supplying an invalid encoding value
- **Nearby killed mutants:** `ObjectLiteral`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...

- **Original (snippet):** `{ encoding, o: -1, q: 0, s: 0, i: index }`

### Survivor 29 — Line 141
- **ID:** `255`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 141 (col 63–4)
- **Tests completed:** 4
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator encodings() should filter by provided encodings; Negotiator encodings() should exclude identity when q=0; new Accepts(req) accepts.encodings() with arguments when Accept-Encoding is populated it should prioritize according to the request order
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: expected [] to deeply equal [ 'gzip' ]; `EqualityOperator`: expected [ 'br' ] to deeply equal []; `MethodExpression`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `MethodExpression`: expected [] to deeply equal [ 'gzip' ]

- **Original (snippet):** `if (spec.encoding.toLowerCase() === encoding.toLowerCase()) {
    s |= 1
  } else if (spec.encoding !== '*') {`

### Survivor 30 — Line 142
- **ID:** `256`
- **Mutator:** `AssignmentOperator`
- **Replacement:** `s &= 1`
- **Location:** Line 142 (col 5–11)
- **Tests completed:** 4
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator encodings() should filter by provided encodings; Negotiator encodings() should exclude identity when q=0; new Accepts(req) accepts.encodings() with arguments when Accept-Encoding is populated it should prioritize according to the request order

- **Original (snippet):** `s |= 1`

### Survivor 31 — Line 151
- **ID:** `267`
- **Mutator:** `StringLiteral`
- **Replacement:** `"Stryker was here!"`
- **Location:** Line 151 (col 49–51)
- **Tests completed:** 2
- **Covered by:** Negotiator encodings() should return identity when no Accept-Encoding header; new Accepts(req) accepts.encodings() with arguments when Accept-Encoding is not populated it should return false
- **Nearby killed mutants:** `ConditionalExpression`: accept.split is not a function; `ConditionalExpression`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `LogicalOperator`: Cannot read properties of undefined (reading 'split')

- **Original (snippet):** `const accepts = parseAcceptEncoding(accept || '')`

### Survivor 32 — Line 184
- **ID:** `297`
- **Mutator:** `MethodExpression`
- **Replacement:** `s`
- **Location:** Line 184 (col 32–40)
- **Tests completed:** 21
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Request extensions req.acceptsLanguages() should detect "Accept-Language" header; Request extensions req.acceptsLanguages() should parse multiple values; Negotiator languages() should return * when no Accept-Language header; Negotiator languages() should parse Accept-Language header; Negotiator languages() should sort by quality value; Negotiator languages() should filter by provided languages; Negotiator languages() should return empty array when no match; Negotiator languages() should handle wildcard *; Negotiator languages() should handle language tags with subtags; Negotiator languages() should match language prefix; Negotiator languages() should prefer exact match over prefix match; Negotiator languages() should exclude q=0 languages; Negotiator languages() should handle array headers; Negotiator languages() should handle malformed language; Negotiator languages() should handle invalid provided language format; new Accepts(req) accepts.languages() with no arguments when Accept-Language is populated it should return accepted languages; new Accepts(req) accepts.languages() with no arguments when Accept-Language is not in request it should return *; new Accepts(req) accepts.languages() with arguments when Accept-Language is populated it should prioritize according to the request order; new Accepts(req) accepts.languages() with arguments when Accept-Language is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.languages() with arguments when Accept-Language is populated and the supplied argument is wrong it should return false

- **Original (snippet):** `const spec = parseLanguage(s.trim(), i)`

### Survivor 33 — Line 185
- **ID:** `299`
- **Mutator:** `ArrayDeclaration`
- **Replacement:** `["Stryker was here"]`
- **Location:** Line 185 (col 28–30)
- **Tests completed:** 1
- **Covered by:** Negotiator languages() should handle malformed language
- **Nearby killed mutants:** `ArrayDeclaration`: expected [] to strictly equal [ 'en', 'it', 'us' ]

- **Original (snippet):** `return spec ? [spec] : []`

### Survivor 34 — Line 196
- **ID:** `309`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 196 (col 64–68)
- **Tests completed:** 4
- **Covered by:** Request extensions req.acceptsLanguages() should parse multiple values; Negotiator languages() should sort by quality value; Negotiator languages() should prefer exact match over prefix match; Negotiator languages() should exclude q=0 languages
- **Nearby killed mutants:** `OptionalChaining`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `StringLiteral`: expected [ 'en', 'es' ] to deeply equal [ 'es', 'en' ]; `ArrowFunction`: expected [ 'en', 'es' ] to deeply equal [ 'es', 'en' ]; `MethodExpression`: expected [ 'en', 'es' ] to deeply equal [ 'es', 'en' ]

- **Original (snippet):** `const qParam = match[3]?.split(';').find((p) => p.startsWith('q='))`

### Survivor 35 — Line 206
- **ID:** `318`
- **Mutator:** `EqualityOperator`
- **Replacement:** `(priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) <= 0`
- **Location:** Line 206 (col 22–93)
- **Tests completed:** 7
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator languages() should filter by provided languages; Negotiator languages() should handle wildcard *; Negotiator languages() should match language prefix; Negotiator languages() should prefer exact match over prefix match; new Accepts(req) accepts.languages() with arguments when Accept-Language is populated it should prioritize according to the request order; new Accepts(req) accepts.languages() with arguments when Accept-Language is populated it should prioritize according to the request order (second option)
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have status code 200 but was 500 (body was: Cannot rea...; `ConditionalExpression`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `LogicalOperator`: Request "GET /" should have status code 200 but was 500 (body was: Cannot rea...; `ConditionalExpression`: expected [ 'en', 'en-US' ] to deeply equal [ 'en-US', 'en' ]; `EqualityOperator`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...

- **Original (snippet):** `return spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0 ? spec : priority`

### Survivor 36 — Line 206
- **ID:** `324`
- **Mutator:** `LogicalOperator`
- **Replacement:** `priority.s - spec.s && priority.q - spec.q`
- **Location:** Line 206 (col 23–65)
- **Tests completed:** 7
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator languages() should filter by provided languages; Negotiator languages() should handle wildcard *; Negotiator languages() should match language prefix; Negotiator languages() should prefer exact match over prefix match; new Accepts(req) accepts.languages() with arguments when Accept-Language is populated it should prioritize according to the request order; new Accepts(req) accepts.languages() with arguments when Accept-Language is populated it should prioritize according to the request order (second option)
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have status code 200 but was 500 (body was: Cannot rea...; `ConditionalExpression`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `LogicalOperator`: Request "GET /" should have status code 200 but was 500 (body was: Cannot rea...; `ConditionalExpression`: expected [ 'en', 'en-US' ] to deeply equal [ 'en-US', 'en' ]; `EqualityOperator`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...

- **Original (snippet):** `return spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0 ? spec : priority`

### Survivor 37 — Line 208
- **ID:** `329`
- **Mutator:** `UnaryOperator`
- **Replacement:** `+1`
- **Location:** Line 208 (col 10–12)
- **Tests completed:** 10
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator languages() should filter by provided languages; Negotiator languages() should return empty array when no match; Negotiator languages() should handle wildcard *; Negotiator languages() should match language prefix; Negotiator languages() should prefer exact match over prefix match; Negotiator languages() should handle invalid provided language format; new Accepts(req) accepts.languages() with arguments when Accept-Language is populated it should prioritize according to the request order; new Accepts(req) accepts.languages() with arguments when Accept-Language is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.languages() with arguments when Accept-Language is populated and the supplied argument is wrong it should return false
- **Nearby killed mutants:** `ObjectLiteral`: expected [] to deeply equal [ 'es', 'fr' ]

- **Original (snippet):** `{ o: -1, q: 0, s: 0, i: index }`

### Survivor 38 — Line 219
- **ID:** `342`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 219 (col 14–64)
- **Tests completed:** 9
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator languages() should filter by provided languages; Negotiator languages() should return empty array when no match; Negotiator languages() should handle wildcard *; Negotiator languages() should match language prefix; Negotiator languages() should prefer exact match over prefix match; new Accepts(req) accepts.languages() with arguments when Accept-Language is populated it should prioritize according to the request order; new Accepts(req) accepts.languages() with arguments when Accept-Language is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.languages() with arguments when Accept-Language is populated and the supplied argument is wrong it should return false
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'fr' ] to deeply equal []; `EqualityOperator`: expected [ 'fr' ] to deeply equal []

- **Original (snippet):** `} else if (spec.prefix.toLowerCase() === p.full.toLowerCase()) {`

### Survivor 39 — Line 219
- **ID:** `344`
- **Mutator:** `MethodExpression`
- **Replacement:** `spec.prefix.toUpperCase()`
- **Location:** Line 219 (col 14–39)
- **Tests completed:** 9
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator languages() should filter by provided languages; Negotiator languages() should return empty array when no match; Negotiator languages() should handle wildcard *; Negotiator languages() should match language prefix; Negotiator languages() should prefer exact match over prefix match; new Accepts(req) accepts.languages() with arguments when Accept-Language is populated it should prioritize according to the request order; new Accepts(req) accepts.languages() with arguments when Accept-Language is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.languages() with arguments when Accept-Language is populated and the supplied argument is wrong it should return false
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'fr' ] to deeply equal []; `EqualityOperator`: expected [ 'fr' ] to deeply equal []

- **Original (snippet):** `} else if (spec.prefix.toLowerCase() === p.full.toLowerCase()) {`

### Survivor 40 — Line 219
- **ID:** `345`
- **Mutator:** `MethodExpression`
- **Replacement:** `p.full.toUpperCase()`
- **Location:** Line 219 (col 44–64)
- **Tests completed:** 9
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Negotiator languages() should filter by provided languages; Negotiator languages() should return empty array when no match; Negotiator languages() should handle wildcard *; Negotiator languages() should match language prefix; Negotiator languages() should prefer exact match over prefix match; new Accepts(req) accepts.languages() with arguments when Accept-Language is populated it should prioritize according to the request order; new Accepts(req) accepts.languages() with arguments when Accept-Language is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.languages() with arguments when Accept-Language is populated and the supplied argument is wrong it should return false
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'fr' ] to deeply equal []; `EqualityOperator`: expected [ 'fr' ] to deeply equal []

- **Original (snippet):** `} else if (spec.prefix.toLowerCase() === p.full.toLowerCase()) {`

### Survivor 41 — Line 219
- **ID:** `346`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 219 (col 66–4)
- **Tests completed:** 1
- **Covered by:** Negotiator languages() should prefer exact match over prefix match
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'fr' ] to deeply equal []; `EqualityOperator`: expected [ 'fr' ] to deeply equal []

- **Original (snippet):** `} else if (spec.prefix.toLowerCase() === p.full.toLowerCase()) {
    s |= 2
  } else if (spec.full.toLowerCase() === p.prefix.toLowerCase()) {`

### Survivor 42 — Line 220
- **ID:** `347`
- **Mutator:** `AssignmentOperator`
- **Replacement:** `s &= 2`
- **Location:** Line 220 (col 5–11)
- **Tests completed:** 1
- **Covered by:** Negotiator languages() should prefer exact match over prefix match

- **Original (snippet):** `s |= 2`

### Survivor 43 — Line 221
- **ID:** `353`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 221 (col 66–4)
- **Tests completed:** 2
- **Covered by:** Negotiator languages() should match language prefix; Negotiator languages() should prefer exact match over prefix match
- **Nearby killed mutants:** `ConditionalExpression`: expected 'fr' to strictly equal false; `ConditionalExpression`: expected [] to deeply equal [ 'en-US' ]; `EqualityOperator`: expected [ 'fr' ] to deeply equal []; `MethodExpression`: expected [] to deeply equal [ 'en-US' ]; `MethodExpression`: expected [] to deeply equal [ 'en-US' ]

- **Original (snippet):** `} else if (spec.full.toLowerCase() === p.prefix.toLowerCase()) {
    s |= 1
  } else if (spec.full !== '*') {`

### Survivor 44 — Line 222
- **ID:** `354`
- **Mutator:** `AssignmentOperator`
- **Replacement:** `s &= 1`
- **Location:** Line 222 (col 5–11)
- **Tests completed:** 2
- **Covered by:** Negotiator languages() should match language prefix; Negotiator languages() should prefer exact match over prefix match

- **Original (snippet):** `s |= 1`

### Survivor 45 — Line 264
- **ID:** `397`
- **Mutator:** `MethodExpression`
- **Replacement:** `s`
- **Location:** Line 264 (col 33–41)
- **Tests completed:** 41
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send an empty response for unsupported MIME types; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Response extensions res.format(obj) should throw 406 status when invalid MIME is specified; Response extensions res.format(obj) should call `default` as a function if specified; Request extensions req.accepts() should detect an "Accept" header; Request extensions req.accepts() should parse multiple values; Negotiator mediaTypes() should return */* when no Accept header; Negotiator mediaTypes() should parse Accept header; Negotiator mediaTypes() should sort by quality value; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should return empty array when no match; Negotiator mediaTypes() should handle wildcard */*; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should not match type wildcard for different types; Negotiator mediaTypes() should exclude q=0 media types; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should handle quoted parameters; Negotiator mediaTypes() should handle comma inside quoted parameter; Negotiator mediaTypes() should handle semicolon inside quoted parameter; Negotiator mediaTypes() should handle multiple parameters; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; Negotiator mediaTypes() should handle invalid provided media type format; Negotiator mediaTypes() should handle parameter without value; Negotiator edge cases should handle empty header value; Negotiator edge cases should handle whitespace in header; Negotiator edge cases should handle malformed quality value; Negotiator edge cases should handle duplicate entries; Negotiator edge cases should handle array headers (joined with comma); new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.types() with arguments when Accept is populated and the supplied argument is not one of the accepted types it should return false; new Accepts(req) accepts.types() with arguments should ignore invalid data; new Accepts(req) accepts.types() without arguments when no argument is supplied it should return all accepted types

- **Original (snippet):** `const spec = parseMediaType(s.trim(), i)`

### Survivor 46 — Line 283
- **ID:** `410`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 283 (col 21–73)
- **Tests completed:** 11
- **Covered by:** Negotiator mediaTypes() should sort by quality value; Negotiator mediaTypes() should exclude q=0 media types; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should handle quoted parameters; Negotiator mediaTypes() should handle comma inside quoted parameter; Negotiator mediaTypes() should handle semicolon inside quoted parameter; Negotiator mediaTypes() should handle multiple parameters; Negotiator mediaTypes() should match wildcard parameter value; Negotiator mediaTypes() should handle parameter without value; Negotiator edge cases should handle malformed quality value
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'application/json' ] to deeply equal [ 'application/json', 'text/h...

- **Original (snippet):** `const value = val && val[0] === '"' && val[val.length - 1] === '"' ? val.slice(1, -1) : val`

### Survivor 47 — Line 283
- **ID:** `411`
- **Mutator:** `LogicalOperator`
- **Replacement:** `val && val[0] === '"' || val[val.length - 1] === '"'`
- **Location:** Line 283 (col 21–73)
- **Tests completed:** 11
- **Covered by:** Negotiator mediaTypes() should sort by quality value; Negotiator mediaTypes() should exclude q=0 media types; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should handle quoted parameters; Negotiator mediaTypes() should handle comma inside quoted parameter; Negotiator mediaTypes() should handle semicolon inside quoted parameter; Negotiator mediaTypes() should handle multiple parameters; Negotiator mediaTypes() should match wildcard parameter value; Negotiator mediaTypes() should handle parameter without value; Negotiator edge cases should handle malformed quality value
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'application/json' ] to deeply equal [ 'application/json', 'text/h...

- **Original (snippet):** `const value = val && val[0] === '"' && val[val.length - 1] === '"' ? val.slice(1, -1) : val`

### Survivor 48 — Line 283
- **ID:** `412`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 283 (col 21–42)
- **Tests completed:** 11
- **Covered by:** Negotiator mediaTypes() should sort by quality value; Negotiator mediaTypes() should exclude q=0 media types; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should handle quoted parameters; Negotiator mediaTypes() should handle comma inside quoted parameter; Negotiator mediaTypes() should handle semicolon inside quoted parameter; Negotiator mediaTypes() should handle multiple parameters; Negotiator mediaTypes() should match wildcard parameter value; Negotiator mediaTypes() should handle parameter without value; Negotiator edge cases should handle malformed quality value
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'application/json' ] to deeply equal [ 'application/json', 'text/h...

- **Original (snippet):** `const value = val && val[0] === '"' && val[val.length - 1] === '"' ? val.slice(1, -1) : val`

### Survivor 49 — Line 283
- **ID:** `413`
- **Mutator:** `LogicalOperator`
- **Replacement:** `val || val[0] === '"'`
- **Location:** Line 283 (col 21–42)
- **Tests completed:** 11
- **Covered by:** Negotiator mediaTypes() should sort by quality value; Negotiator mediaTypes() should exclude q=0 media types; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should handle quoted parameters; Negotiator mediaTypes() should handle comma inside quoted parameter; Negotiator mediaTypes() should handle semicolon inside quoted parameter; Negotiator mediaTypes() should handle multiple parameters; Negotiator mediaTypes() should match wildcard parameter value; Negotiator mediaTypes() should handle parameter without value; Negotiator edge cases should handle malformed quality value
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'application/json' ] to deeply equal [ 'application/json', 'text/h...

- **Original (snippet):** `const value = val && val[0] === '"' && val[val.length - 1] === '"' ? val.slice(1, -1) : val`

### Survivor 50 — Line 283
- **ID:** `414`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 283 (col 28–42)
- **Tests completed:** 10
- **Covered by:** Negotiator mediaTypes() should sort by quality value; Negotiator mediaTypes() should exclude q=0 media types; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should handle quoted parameters; Negotiator mediaTypes() should handle comma inside quoted parameter; Negotiator mediaTypes() should handle semicolon inside quoted parameter; Negotiator mediaTypes() should handle multiple parameters; Negotiator mediaTypes() should match wildcard parameter value; Negotiator edge cases should handle malformed quality value
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'application/json' ] to deeply equal [ 'application/json', 'text/h...

- **Original (snippet):** `const value = val && val[0] === '"' && val[val.length - 1] === '"' ? val.slice(1, -1) : val`

### Survivor 51 — Line 283
- **ID:** `415`
- **Mutator:** `EqualityOperator`
- **Replacement:** `val[0] !== '"'`
- **Location:** Line 283 (col 28–42)
- **Tests completed:** 10
- **Covered by:** Negotiator mediaTypes() should sort by quality value; Negotiator mediaTypes() should exclude q=0 media types; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should handle quoted parameters; Negotiator mediaTypes() should handle comma inside quoted parameter; Negotiator mediaTypes() should handle semicolon inside quoted parameter; Negotiator mediaTypes() should handle multiple parameters; Negotiator mediaTypes() should match wildcard parameter value; Negotiator edge cases should handle malformed quality value
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'application/json' ] to deeply equal [ 'application/json', 'text/h...

- **Original (snippet):** `const value = val && val[0] === '"' && val[val.length - 1] === '"' ? val.slice(1, -1) : val`

### Survivor 52 — Line 283
- **ID:** `416`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 283 (col 39–42)
- **Tests completed:** 10
- **Covered by:** Negotiator mediaTypes() should sort by quality value; Negotiator mediaTypes() should exclude q=0 media types; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should handle quoted parameters; Negotiator mediaTypes() should handle comma inside quoted parameter; Negotiator mediaTypes() should handle semicolon inside quoted parameter; Negotiator mediaTypes() should handle multiple parameters; Negotiator mediaTypes() should match wildcard parameter value; Negotiator edge cases should handle malformed quality value
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'application/json' ] to deeply equal [ 'application/json', 'text/h...

- **Original (snippet):** `const value = val && val[0] === '"' && val[val.length - 1] === '"' ? val.slice(1, -1) : val`

### Survivor 53 — Line 283
- **ID:** `417`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 283 (col 46–73)
- **Tests completed:** 3
- **Covered by:** Negotiator mediaTypes() should handle quoted parameters; Negotiator mediaTypes() should handle comma inside quoted parameter; Negotiator mediaTypes() should handle semicolon inside quoted parameter
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'application/json' ] to deeply equal [ 'application/json', 'text/h...

- **Original (snippet):** `const value = val && val[0] === '"' && val[val.length - 1] === '"' ? val.slice(1, -1) : val`

### Survivor 54 — Line 283
- **ID:** `418`
- **Mutator:** `EqualityOperator`
- **Replacement:** `val[val.length - 1] !== '"'`
- **Location:** Line 283 (col 46–73)
- **Tests completed:** 3
- **Covered by:** Negotiator mediaTypes() should handle quoted parameters; Negotiator mediaTypes() should handle comma inside quoted parameter; Negotiator mediaTypes() should handle semicolon inside quoted parameter
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'application/json' ] to deeply equal [ 'application/json', 'text/h...

- **Original (snippet):** `const value = val && val[0] === '"' && val[val.length - 1] === '"' ? val.slice(1, -1) : val`

### Survivor 55 — Line 283
- **ID:** `419`
- **Mutator:** `ArithmeticOperator`
- **Replacement:** `val.length + 1`
- **Location:** Line 283 (col 50–64)
- **Tests completed:** 3
- **Covered by:** Negotiator mediaTypes() should handle quoted parameters; Negotiator mediaTypes() should handle comma inside quoted parameter; Negotiator mediaTypes() should handle semicolon inside quoted parameter
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'application/json' ] to deeply equal [ 'application/json', 'text/h...

- **Original (snippet):** `const value = val && val[0] === '"' && val[val.length - 1] === '"' ? val.slice(1, -1) : val`

### Survivor 56 — Line 283
- **ID:** `420`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 283 (col 70–73)
- **Tests completed:** 3
- **Covered by:** Negotiator mediaTypes() should handle quoted parameters; Negotiator mediaTypes() should handle comma inside quoted parameter; Negotiator mediaTypes() should handle semicolon inside quoted parameter
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'application/json' ] to deeply equal [ 'application/json', 'text/h...

- **Original (snippet):** `const value = val && val[0] === '"' && val[val.length - 1] === '"' ? val.slice(1, -1) : val`

### Survivor 57 — Line 283
- **ID:** `421`
- **Mutator:** `MethodExpression`
- **Replacement:** `val`
- **Location:** Line 283 (col 76–92)
- **Tests completed:** 3
- **Covered by:** Negotiator mediaTypes() should handle quoted parameters; Negotiator mediaTypes() should handle comma inside quoted parameter; Negotiator mediaTypes() should handle semicolon inside quoted parameter
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'application/json' ] to deeply equal [ 'application/json', 'text/h...

- **Original (snippet):** `const value = val && val[0] === '"' && val[val.length - 1] === '"' ? val.slice(1, -1) : val`

### Survivor 58 — Line 283
- **ID:** `422`
- **Mutator:** `UnaryOperator`
- **Replacement:** `+1`
- **Location:** Line 283 (col 89–91)
- **Tests completed:** 3
- **Covered by:** Negotiator mediaTypes() should handle quoted parameters; Negotiator mediaTypes() should handle comma inside quoted parameter; Negotiator mediaTypes() should handle semicolon inside quoted parameter
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'application/json' ] to deeply equal [ 'application/json', 'text/h...

- **Original (snippet):** `const value = val && val[0] === '"' && val[val.length - 1] === '"' ? val.slice(1, -1) : val`

### Survivor 59 — Line 301
- **ID:** `434`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 301 (col 22–93)
- **Tests completed:** 15
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should handle wildcard */*; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option)
- **Nearby killed mutants:** `ConditionalExpression`: Cannot read properties of null (reading 'q'); `ConditionalExpression`: expected [] to deeply equal [ 'application/json' ]; `LogicalOperator`: Cannot read properties of null (reading 's'); `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: expected [] to deeply equal [ 'application/json' ]

- **Original (snippet):** `return spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0 ? spec : priority`

### Survivor 60 — Line 301
- **ID:** `435`
- **Mutator:** `EqualityOperator`
- **Replacement:** `(priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) <= 0`
- **Location:** Line 301 (col 22–93)
- **Tests completed:** 15
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should handle wildcard */*; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option)
- **Nearby killed mutants:** `ConditionalExpression`: Cannot read properties of null (reading 'q'); `ConditionalExpression`: expected [] to deeply equal [ 'application/json' ]; `LogicalOperator`: Cannot read properties of null (reading 's'); `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: expected [] to deeply equal [ 'application/json' ]

- **Original (snippet):** `return spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0 ? spec : priority`

### Survivor 61 — Line 301
- **ID:** `439`
- **Mutator:** `LogicalOperator`
- **Replacement:** `(priority.s - spec.s || priority.q - spec.q) && priority.o - spec.o`
- **Location:** Line 301 (col 23–88)
- **Tests completed:** 15
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should handle wildcard */*; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option)
- **Nearby killed mutants:** `ConditionalExpression`: Cannot read properties of null (reading 'q'); `ConditionalExpression`: expected [] to deeply equal [ 'application/json' ]; `LogicalOperator`: Cannot read properties of null (reading 's'); `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: expected [] to deeply equal [ 'application/json' ]

- **Original (snippet):** `return spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0 ? spec : priority`

### Survivor 62 — Line 301
- **ID:** `440`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 301 (col 23–65)
- **Tests completed:** 15
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should handle wildcard */*; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option)
- **Nearby killed mutants:** `ConditionalExpression`: Cannot read properties of null (reading 'q'); `ConditionalExpression`: expected [] to deeply equal [ 'application/json' ]; `LogicalOperator`: Cannot read properties of null (reading 's'); `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: expected [] to deeply equal [ 'application/json' ]

- **Original (snippet):** `return spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0 ? spec : priority`

### Survivor 63 — Line 301
- **ID:** `441`
- **Mutator:** `LogicalOperator`
- **Replacement:** `priority.s - spec.s && priority.q - spec.q`
- **Location:** Line 301 (col 23–65)
- **Tests completed:** 15
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should handle wildcard */*; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option)
- **Nearby killed mutants:** `ConditionalExpression`: Cannot read properties of null (reading 'q'); `ConditionalExpression`: expected [] to deeply equal [ 'application/json' ]; `LogicalOperator`: Cannot read properties of null (reading 's'); `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: expected [] to deeply equal [ 'application/json' ]

- **Original (snippet):** `return spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0 ? spec : priority`

### Survivor 64 — Line 303
- **ID:** `446`
- **Mutator:** `UnaryOperator`
- **Replacement:** `+1`
- **Location:** Line 303 (col 10–12)
- **Tests completed:** 23
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send an empty response for unsupported MIME types; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Response extensions res.format(obj) should throw 406 status when invalid MIME is specified; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should return empty array when no match; Negotiator mediaTypes() should handle wildcard */*; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should not match type wildcard for different types; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; Negotiator mediaTypes() should handle invalid provided media type format; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.types() with arguments when Accept is populated and the supplied argument is not one of the accepted types it should return false; new Accepts(req) accepts.types() with arguments should ignore invalid data
- **Nearby killed mutants:** `ObjectLiteral`: expected [] to deeply equal [ 'application/json' ]

- **Original (snippet):** `{ o: -1, q: 0, s: 0, i: index }`

### Survivor 65 — Line 313
- **ID:** `456`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 313 (col 57–4)
- **Tests completed:** 12
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.types() with arguments should ignore invalid data
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'application/json' ] to deeply equal []; `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `MethodExpression`: expected [] to deeply equal [ 'application/json' ]; `MethodExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `if (spec.type.toLowerCase() === p.type.toLowerCase()) {
    s |= 4
  } else if (spec.type !== '*') {`

### Survivor 66 — Line 314
- **ID:** `457`
- **Mutator:** `AssignmentOperator`
- **Replacement:** `s &= 4`
- **Location:** Line 314 (col 5–11)
- **Tests completed:** 12
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.types() with arguments should ignore invalid data

- **Original (snippet):** `s |= 4`

### Survivor 67 — Line 320
- **ID:** `469`
- **Mutator:** `AssignmentOperator`
- **Replacement:** `s &= 2`
- **Location:** Line 320 (col 5–11)
- **Tests completed:** 10
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option)

- **Original (snippet):** `s |= 2`

### Survivor 68 — Line 326
- **ID:** `475`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 326 (col 7–22)
- **Tests completed:** 16
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should handle wildcard */*; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option)
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'text/html;level=2' ] to deeply equal []; `EqualityOperator`: expected [ 'text/html;level=2' ] to deeply equal []; `BlockStatement`: expected [ 'text/html;level=2' ] to deeply equal []

- **Original (snippet):** `if (keys.length > 0) {`

### Survivor 69 — Line 326
- **ID:** `477`
- **Mutator:** `EqualityOperator`
- **Replacement:** `keys.length >= 0`
- **Location:** Line 326 (col 7–22)
- **Tests completed:** 16
- **Covered by:** Request properties req.accepts methods share cached Accepts instance; Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should handle wildcard */*; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option)
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'text/html;level=2' ] to deeply equal []; `EqualityOperator`: expected [ 'text/html;level=2' ] to deeply equal []; `BlockStatement`: expected [ 'text/html;level=2' ] to deeply equal []

- **Original (snippet):** `if (keys.length > 0) {`

### Survivor 70 — Line 328
- **ID:** `482`
- **Mutator:** `MethodExpression`
- **Replacement:** `keys.some(k => spec.params[k] === '*' || (spec.params[k] || '').toLowerCase() === (p.params[k] || '').toLowerCase())`
- **Location:** Line 328 (col 7–8)
- **Tests completed:** 3
- **Covered by:** Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should match wildcard parameter value
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'text/html;level=2' ] to deeply equal []; `ConditionalExpression`: expected [] to deeply equal [ 'text/html;level=1' ]

- **Original (snippet):** `keys.every(
        (k) => spec.params[k] === '*' || (spec.params[k] || '').toLowerCase() === (p.params[k] || '').toLowerCase()
      )`

### Survivor 71 — Line 329
- **ID:** `492`
- **Mutator:** `MethodExpression`
- **Replacement:** `(spec.params[k] || '').toUpperCase()`
- **Location:** Line 329 (col 42–78)
- **Tests completed:** 2
- **Covered by:** Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ
- **Nearby killed mutants:** `ArrowFunction`: expected [] to deeply equal [ 'text/html;level=1' ]; `ConditionalExpression`: expected [ 'text/html;level=2' ] to deeply equal []; `ConditionalExpression`: expected [] to deeply equal [ 'text/html;level=1' ]; `LogicalOperator`: expected [] to deeply equal [ 'text/html;level=1' ]; `ConditionalExpression`: expected [] to deeply equal [ 'text/html;level=1' ]

- **Original (snippet):** `(k) => spec.params[k] === '*' || (spec.params[k] || '').toLowerCase() === (p.params[k] || '').toLowerCase()`

### Survivor 72 — Line 329
- **ID:** `497`
- **Mutator:** `MethodExpression`
- **Replacement:** `(p.params[k] || '').toUpperCase()`
- **Location:** Line 329 (col 83–116)
- **Tests completed:** 2
- **Covered by:** Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ
- **Nearby killed mutants:** `ArrowFunction`: expected [] to deeply equal [ 'text/html;level=1' ]; `ConditionalExpression`: expected [ 'text/html;level=2' ] to deeply equal []; `ConditionalExpression`: expected [] to deeply equal [ 'text/html;level=1' ]; `LogicalOperator`: expected [] to deeply equal [ 'text/html;level=1' ]; `ConditionalExpression`: expected [] to deeply equal [ 'text/html;level=1' ]

- **Original (snippet):** `(k) => spec.params[k] === '*' || (spec.params[k] || '').toLowerCase() === (p.params[k] || '').toLowerCase()`

### Survivor 73 — Line 331
- **ID:** `502`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 331 (col 7–6)
- **Tests completed:** 2
- **Covered by:** Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should match wildcard parameter value

- **Original (snippet):** `) {
      s |= 1
    } else {`

### Survivor 74 — Line 332
- **ID:** `503`
- **Mutator:** `AssignmentOperator`
- **Replacement:** `s &= 1`
- **Location:** Line 332 (col 7–13)
- **Tests completed:** 2
- **Covered by:** Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should match wildcard parameter value

- **Original (snippet):** `s |= 1`

### Survivor 75 — Line 342
- **ID:** `514`
- **Mutator:** `StringLiteral`
- **Replacement:** `"Stryker was here!"`
- **Location:** Line 342 (col 72–74)
- **Tests completed:** 1
- **Covered by:** Negotiator edge cases should handle empty header value
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: expected [] to deeply equal [ '*/*' ]; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `StringLiteral`: expected [] to deeply equal [ '*/*' ]; `ConditionalExpression`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...

- **Original (snippet):** `const accepts = parseAccept(accept === undefined ? '*/*' : accept || '')`

### Survivor 76 — Line 365
- **ID:** `535`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 365 (col 10–18)
- **Tests completed:** 11
- **Covered by:** Negotiator mediaTypes() should sort by quality value; Negotiator mediaTypes() should exclude q=0 media types; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should handle quoted parameters; Negotiator mediaTypes() should handle comma inside quoted parameter; Negotiator mediaTypes() should handle semicolon inside quoted parameter; Negotiator mediaTypes() should handle multiple parameters; Negotiator mediaTypes() should match wildcard parameter value; Negotiator mediaTypes() should handle parameter without value; Negotiator edge cases should handle malformed quality value
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'text/html', 'application/json' ] to deeply equal [ 'application/j...; `EqualityOperator`: expected [ 'text/html', 'application/json' ] to deeply equal [ 'application/j...; `UnaryOperator`: expected [ 'text/html', 'application/json' ] to deeply equal [ 'application/j...; `ArrayDeclaration`: Cannot read properties of undefined (reading 'toLowerCase'); `ArrayDeclaration`: Cannot read properties of undefined (reading 'toLowerCase')

- **Original (snippet):** `return i === -1 ? [str, ''] : [str.slice(0, i), str.slice(i + 1)]`

### Survivor 77 — Line 365
- **ID:** `539`
- **Mutator:** `StringLiteral`
- **Replacement:** `"Stryker was here!"`
- **Location:** Line 365 (col 27–29)
- **Tests completed:** 1
- **Covered by:** Negotiator mediaTypes() should handle parameter without value
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'text/html', 'application/json' ] to deeply equal [ 'application/j...; `EqualityOperator`: expected [ 'text/html', 'application/json' ] to deeply equal [ 'application/j...; `UnaryOperator`: expected [ 'text/html', 'application/json' ] to deeply equal [ 'application/j...; `ArrayDeclaration`: Cannot read properties of undefined (reading 'toLowerCase'); `ArrayDeclaration`: Cannot read properties of undefined (reading 'toLowerCase')

- **Original (snippet):** `return i === -1 ? [str, ''] : [str.slice(0, i), str.slice(i + 1)]`

### Survivor 78 — Line 373
- **ID:** `551`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 373 (col 9–41)
- **Tests completed:** 15
- **Covered by:** Response extensions res.redirect(url, status) should send an empty response for unsupported MIME types; Request extensions req.accepts() should parse multiple values; Negotiator mediaTypes() should parse Accept header; Negotiator mediaTypes() should sort by quality value; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should exclude q=0 media types; Negotiator mediaTypes() should handle comma inside quoted parameter; Negotiator mediaTypes() should prefer more specific media types; Negotiator edge cases should handle whitespace in header; Negotiator edge cases should handle duplicate entries; Negotiator edge cases should handle array headers (joined with comma); new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.types() with arguments should ignore invalid data; new Accepts(req) accepts.types() without arguments when no argument is supplied it should return all accepted types
- **Nearby killed mutants:** `ConditionalExpression`: expected [] to deeply equal [ 'text/html', 'application/json' ]; `EqualityOperator`: expected [] to deeply equal [ 'text/html', 'application/json' ]; `ArithmeticOperator`: expected [ 'text/html' ] to deeply equal [ 'text/html', 'application/json' ]; `BlockStatement`: expected [ 'text/html' ] to deeply equal [ 'text/html', 'application/json' ]

- **Original (snippet):** `if (quoteCount(accepts[j]) % 2 === 0) {`

### Survivor 79 — Line 387
- **ID:** `563`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 387 (col 19–40)
- **Tests completed:** 11
- **Covered by:** Negotiator mediaTypes() should sort by quality value; Negotiator mediaTypes() should exclude q=0 media types; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should handle quoted parameters; Negotiator mediaTypes() should handle comma inside quoted parameter; Negotiator mediaTypes() should handle semicolon inside quoted parameter; Negotiator mediaTypes() should handle multiple parameters; Negotiator mediaTypes() should match wildcard parameter value; Negotiator mediaTypes() should handle parameter without value; Negotiator edge cases should handle malformed quality value
- **Nearby killed mutants:** `EqualityOperator`: Cannot read properties of undefined (reading 'match'); `EqualityOperator`: Cannot read properties of undefined (reading 'match'); `UpdateOperator`: Cannot read properties of undefined (reading 'match')

- **Original (snippet):** `for (let i = 1; i < parameters.length; i++) {`

### Survivor 80 — Line 387
- **ID:** `567`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 387 (col 47–4)
- **Tests completed:** 2
- **Covered by:** Negotiator mediaTypes() should handle semicolon inside quoted parameter; Negotiator mediaTypes() should handle multiple parameters
- **Nearby killed mutants:** `EqualityOperator`: Cannot read properties of undefined (reading 'match'); `EqualityOperator`: Cannot read properties of undefined (reading 'match'); `UpdateOperator`: Cannot read properties of undefined (reading 'match')

- **Original (snippet):** `for (let i = 1; i < parameters.length; i++) {
    if (quoteCount(parameters[j]) % 2 === 0) {
      parameters[++j] = parameters[i]
    } else {
      parameters[j] += `;${parameters[i]}`
    }
  }`

### Survivor 81 — Line 388
- **ID:** `568`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 388 (col 9–44)
- **Tests completed:** 2
- **Covered by:** Negotiator mediaTypes() should handle semicolon inside quoted parameter; Negotiator mediaTypes() should handle multiple parameters

- **Original (snippet):** `if (quoteCount(parameters[j]) % 2 === 0) {`

### Survivor 82 — Line 388
- **ID:** `569`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 388 (col 9–44)
- **Tests completed:** 2
- **Covered by:** Negotiator mediaTypes() should handle semicolon inside quoted parameter; Negotiator mediaTypes() should handle multiple parameters

- **Original (snippet):** `if (quoteCount(parameters[j]) % 2 === 0) {`

### Survivor 83 — Line 388
- **ID:** `570`
- **Mutator:** `EqualityOperator`
- **Replacement:** `quoteCount(parameters[j]) % 2 !== 0`
- **Location:** Line 388 (col 9–44)
- **Tests completed:** 2
- **Covered by:** Negotiator mediaTypes() should handle semicolon inside quoted parameter; Negotiator mediaTypes() should handle multiple parameters

- **Original (snippet):** `if (quoteCount(parameters[j]) % 2 === 0) {`

### Survivor 84 — Line 388
- **ID:** `571`
- **Mutator:** `ArithmeticOperator`
- **Replacement:** `quoteCount(parameters[j]) * 2`
- **Location:** Line 388 (col 9–38)
- **Tests completed:** 2
- **Covered by:** Negotiator mediaTypes() should handle semicolon inside quoted parameter; Negotiator mediaTypes() should handle multiple parameters

- **Original (snippet):** `if (quoteCount(parameters[j]) % 2 === 0) {`

### Survivor 85 — Line 388
- **ID:** `572`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 388 (col 46–6)
- **Tests completed:** 1
- **Covered by:** Negotiator mediaTypes() should handle multiple parameters

- **Original (snippet):** `if (quoteCount(parameters[j]) % 2 === 0) {
      parameters[++j] = parameters[i]
    } else {`

### Survivor 86 — Line 389
- **ID:** `573`
- **Mutator:** `UpdateOperator`
- **Replacement:** `--j`
- **Location:** Line 389 (col 18–21)
- **Tests completed:** 1
- **Covered by:** Negotiator mediaTypes() should handle multiple parameters

- **Original (snippet):** `parameters[++j] = parameters[i]`

### Survivor 87 — Line 390
- **ID:** `574`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 390 (col 12–6)
- **Tests completed:** 1
- **Covered by:** Negotiator mediaTypes() should handle semicolon inside quoted parameter

- **Original (snippet):** `} else {
      parameters[j] += `;${parameters[i]}`
    }`

### Survivor 88 — Line 391
- **ID:** `575`
- **Mutator:** `StringLiteral`
- **Replacement:** ````
- **Location:** Line 391 (col 24–43)
- **Tests completed:** 1
- **Covered by:** Negotiator mediaTypes() should handle semicolon inside quoted parameter

- **Original (snippet):** `parameters[j] += `;${parameters[i]}``

### Survivor 89 — Line 395
- **ID:** `576`
- **Mutator:** `MethodExpression`
- **Replacement:** `parameters`
- **Location:** Line 395 (col 10–36)
- **Tests completed:** 11
- **Covered by:** Negotiator mediaTypes() should sort by quality value; Negotiator mediaTypes() should exclude q=0 media types; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should handle quoted parameters; Negotiator mediaTypes() should handle comma inside quoted parameter; Negotiator mediaTypes() should handle semicolon inside quoted parameter; Negotiator mediaTypes() should handle multiple parameters; Negotiator mediaTypes() should match wildcard parameter value; Negotiator mediaTypes() should handle parameter without value; Negotiator edge cases should handle malformed quality value
- **Nearby killed mutants:** `ArithmeticOperator`: expected [ 'text/html', 'application/json' ] to deeply equal [ 'application/j...; `ArrowFunction`: Cannot read properties of undefined (reading 'indexOf')

- **Original (snippet):** `return parameters.slice(0, j + 1).map((p) => p.trim())`

### Survivor 90 — Line 395
- **ID:** `579`
- **Mutator:** `MethodExpression`
- **Replacement:** `p`
- **Location:** Line 395 (col 48–56)
- **Tests completed:** 11
- **Covered by:** Negotiator mediaTypes() should sort by quality value; Negotiator mediaTypes() should exclude q=0 media types; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should handle quoted parameters; Negotiator mediaTypes() should handle comma inside quoted parameter; Negotiator mediaTypes() should handle semicolon inside quoted parameter; Negotiator mediaTypes() should handle multiple parameters; Negotiator mediaTypes() should match wildcard parameter value; Negotiator mediaTypes() should handle parameter without value; Negotiator edge cases should handle malformed quality value
- **Nearby killed mutants:** `ArithmeticOperator`: expected [ 'text/html', 'application/json' ] to deeply equal [ 'application/j...; `ArrowFunction`: Cannot read properties of undefined (reading 'indexOf')

- **Original (snippet):** `return parameters.slice(0, j + 1).map((p) => p.trim())`

### Survivor 91 — Line 403
- **ID:** `593`
- **Mutator:** `ArithmeticOperator`
- **Replacement:** `a.i + b.i`
- **Location:** Line 403 (col 49–58)
- **Tests completed:** 8
- **Covered by:** Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Negotiator charsets() should handle wildcard *; Negotiator encodings() should handle wildcard *; Negotiator languages() should handle wildcard *; Negotiator mediaTypes() should handle wildcard */*; Negotiator mediaTypes() should handle type wildcard */subtype
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'en', 'en-US' ] to deeply equal [ 'en-US', 'en' ]; `ConditionalExpression`: expected [ 'en', 'en-US' ] to deeply equal [ 'en-US', 'en' ]; `LogicalOperator`: expected [ 'en', 'en-US' ] to deeply equal [ 'en-US', 'en' ]; `ConditionalExpression`: expected [ 'en', 'en-US' ] to deeply equal [ 'en-US', 'en' ]; `LogicalOperator`: expected [ 'en', 'en-US' ] to deeply equal [ 'en-US', 'en' ]

- **Original (snippet):** `return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0`