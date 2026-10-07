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
- **Covered by:** Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send an empty response for unsupported MIME types; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Response extensions res.format(obj) should throw 406 status when invalid MIME is specified; Response extensions res.format(obj) should call `default` as a function if specified; Request properties req.accepts methods share cached Accepts instance; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.types() with arguments when Accept is populated and the supplied argument is not one of the accepted types it should return false; new Accepts(req) accepts.types() with arguments should ignore invalid data
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
- **Covered by:** Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send an empty response for unsupported MIME types; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Response extensions res.format(obj) should throw 406 status when invalid MIME is specified; Response extensions res.format(obj) should call `default` as a function if specified; Request properties req.accepts methods share cached Accepts instance; new Accepts(req) accepts.types() with arguments when Accept is not populated it should return the first option; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.types() with arguments when types(...) has a string argument it should return it; new Accepts(req) accepts.types() with arguments when Accept is populated and the supplied argument is not one of the accepted types it should return false; new Accepts(req) accepts.types() with arguments should ignore invalid data
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
- **Covered by:** Request extensions req.acceptsCharsets() should detect "Accept-Charset" header; Request extensions req.acceptsCharsets() should parse multiple values; Request properties req.accepts methods share cached Accepts instance; Negotiator charsets() should return * when no Accept-Charset header; Negotiator charsets() should parse Accept-Charset header; Negotiator charsets() should sort by quality value; Negotiator charsets() should filter by provided charsets; Negotiator charsets() should return empty array when no match; Negotiator charsets() should handle wildcard *; Negotiator charsets() should exclude q=0 charsets; Negotiator charsets() should handle case-insensitive matching; Negotiator charsets() should handle array headers; Negotiator charsets() should handle malformed charset; new Accepts(req) accepts.charsets() with no arguments when Accept-Charset is populated it should return accepted types; new Accepts(req) accepts.charsets() with no arguments when Accept-Charset is not in request it should return *; new Accepts(req) accepts.charsets() with arguments when Accept-Charset is in the request it should prioritize according to the request order; new Accepts(req) accepts.charsets() with arguments when Accept-Charset is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.charsets() with arguments when Accept-Charset is populated and the argument is a wrong charset it should return false

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
- **Covered by:** Request extensions req.acceptsEncodings() should detect "Accept-Encoding" header; Request extensions req.acceptsEncodings() should parse multiple values; Request properties req.accepts methods share cached Accepts instance; Negotiator encodings() should return identity when no Accept-Encoding header; Negotiator encodings() should parse Accept-Encoding header; Negotiator encodings() should sort by quality value; Negotiator encodings() should filter by provided encodings; Negotiator encodings() should return empty array when no match; Negotiator encodings() should handle wildcard *; Negotiator encodings() should always include identity by default; Negotiator encodings() should exclude identity when q=0; Negotiator encodings() should handle array headers; Negotiator encodings() should use minQuality for implicit identity; new Accepts(req) accepts.encodings() with arguments when Accept-Encoding is not populated it should return false; new Accepts(req) accepts.encodings() with arguments when Accept-Encoding is populated it should prioritize according to the request order; new Accepts(req) accepts.encodings() with arguments when Accept-Encodings is populated, it should return false when supplying an invalid encoding value; new Accepts(req) accepts.encodings() without arguments when Accept-Encodings is populated and no argument is supplied to encodings() it should return every accepted encoding method

- **Original (snippet):** `const spec = parseEncoding(s.trim(), i)`

### Survivor 18 — Line 112
- **ID:** `213`
- **Mutator:** `MethodExpression`
- **Replacement:** `Math.max(min, enc.q || 1)`
- **Location:** Line 112 (col 52–77)
- **Tests completed:** 13
- **Covered by:** Request extensions req.acceptsEncodings() should detect "Accept-Encoding" header; Request extensions req.acceptsEncodings() should parse multiple values; Request properties req.accepts methods share cached Accepts instance; Negotiator encodings() should parse Accept-Encoding header; Negotiator encodings() should sort by quality value; Negotiator encodings() should filter by provided encodings; Negotiator encodings() should return empty array when no match; Negotiator encodings() should always include identity by default; Negotiator encodings() should handle array headers; Negotiator encodings() should use minQuality for implicit identity; new Accepts(req) accepts.encodings() with arguments when Accept-Encoding is populated it should prioritize according to the request order; new Accepts(req) accepts.encodings() with arguments when Accept-Encodings is populated, it should return false when supplying an invalid encoding value; new Accepts(req) accepts.encodings() without arguments when Accept-Encodings is populated and no argument is supplied to encodings() it should return every accepted encoding method
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
- **Covered by:** Request extensions req.acceptsEncodings() should detect "Accept-Encoding" header; Request extensions req.acceptsEncodings() should parse multiple values; Request properties req.accepts methods share cached Accepts instance; Negotiator encodings() should parse Accept-Encoding header; Negotiator encodings() should sort by quality value; Negotiator encodings() should filter by provided encodings; Negotiator encodings() should return empty array when no match; Negotiator encodings() should always include identity by default; Negotiator encodings() should handle array headers; Negotiator encodings() should use minQuality for implicit identity; new Accepts(req) accepts.encodings() with arguments when Accept-Encoding is populated it should prioritize according to the request order; new Accepts(req) accepts.encodings() with arguments when Accept-Encodings is populated, it should return false when supplying an invalid encoding value; new Accepts(req) accepts.encodings() without arguments when Accept-Encodings is populated and no argument is supplied to encodings() it should return every accepted encoding method
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
- **Covered by:** Request extensions req.acceptsEncodings() should detect "Accept-Encoding" header; Request extensions req.acceptsEncodings() should parse multiple values; Request properties req.accepts methods share cached Accepts instance; Negotiator encodings() should parse Accept-Encoding header; Negotiator encodings() should sort by quality value; Negotiator encodings() should filter by provided encodings; Negotiator encodings() should return empty array when no match; Negotiator encodings() should always include identity by default; Negotiator encodings() should handle array headers; Negotiator encodings() should use minQuality for implicit identity; new Accepts(req) accepts.encodings() with arguments when Accept-Encoding is populated it should prioritize according to the request order; new Accepts(req) accepts.encodings() with arguments when Accept-Encodings is populated, it should return false when supplying an invalid encoding value; new Accepts(req) accepts.encodings() without arguments when Accept-Encodings is populated and no argument is supplied to encodings() it should return every accepted encoding method
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
- **Covered by:** Request extensions req.acceptsLanguages() should detect "Accept-Language" header; Request extensions req.acceptsLanguages() should parse multiple values; Request properties req.accepts methods share cached Accepts instance; Negotiator languages() should return * when no Accept-Language header; Negotiator languages() should parse Accept-Language header; Negotiator languages() should sort by quality value; Negotiator languages() should filter by provided languages; Negotiator languages() should return empty array when no match; Negotiator languages() should handle wildcard *; Negotiator languages() should handle language tags with subtags; Negotiator languages() should match language prefix; Negotiator languages() should prefer exact match over prefix match; Negotiator languages() should exclude q=0 languages; Negotiator languages() should handle array headers; Negotiator languages() should handle malformed language; Negotiator languages() should handle invalid provided language format; new Accepts(req) accepts.languages() with no arguments when Accept-Language is populated it should return accepted languages; new Accepts(req) accepts.languages() with no arguments when Accept-Language is not in request it should return *; new Accepts(req) accepts.languages() with arguments when Accept-Language is populated it should prioritize according to the request order; new Accepts(req) accepts.languages() with arguments when Accept-Language is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.languages() with arguments when Accept-Language is populated and the supplied argument is wrong it should return false

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
- **Covered by:** Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send an empty response for unsupported MIME types; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Response extensions res.format(obj) should throw 406 status when invalid MIME is specified; Response extensions res.format(obj) should call `default` as a function if specified; Request extensions req.accepts() should detect an "Accept" header; Request extensions req.accepts() should parse multiple values; Request properties req.accepts methods share cached Accepts instance; Negotiator mediaTypes() should return */* when no Accept header; Negotiator mediaTypes() should parse Accept header; Negotiator mediaTypes() should sort by quality value; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should return empty array when no match; Negotiator mediaTypes() should handle wildcard */*; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should not match type wildcard for different types; Negotiator mediaTypes() should exclude q=0 media types; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should handle quoted parameters; Negotiator mediaTypes() should handle comma inside quoted parameter; Negotiator mediaTypes() should handle semicolon inside quoted parameter; Negotiator mediaTypes() should handle multiple parameters; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; Negotiator mediaTypes() should handle invalid provided media type format; Negotiator mediaTypes() should handle parameter without value; Negotiator edge cases should handle empty header value; Negotiator edge cases should handle whitespace in header; Negotiator edge cases should handle malformed quality value; Negotiator edge cases should handle duplicate entries; Negotiator edge cases should handle array headers (joined with comma); new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.types() with arguments when Accept is populated and the supplied argument is not one of the accepted types it should return false; new Accepts(req) accepts.types() with arguments should ignore invalid data; new Accepts(req) accepts.types() without arguments when no argument is supplied it should return all accepted types

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
- **Covered by:** Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Request properties req.accepts methods share cached Accepts instance; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should handle wildcard */*; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option)
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
- **Covered by:** Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Request properties req.accepts methods share cached Accepts instance; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should handle wildcard */*; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option)
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
- **Covered by:** Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Request properties req.accepts methods share cached Accepts instance; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should handle wildcard */*; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option)
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
- **Covered by:** Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Request properties req.accepts methods share cached Accepts instance; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should handle wildcard */*; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option)
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
- **Covered by:** Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Request properties req.accepts methods share cached Accepts instance; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should handle wildcard */*; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option)
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
- **Covered by:** Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send an empty response for unsupported MIME types; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Response extensions res.format(obj) should throw 406 status when invalid MIME is specified; Request properties req.accepts methods share cached Accepts instance; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should return empty array when no match; Negotiator mediaTypes() should handle wildcard */*; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should not match type wildcard for different types; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; Negotiator mediaTypes() should handle invalid provided media type format; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.types() with arguments when Accept is populated and the supplied argument is not one of the accepted types it should return false; new Accepts(req) accepts.types() with arguments should ignore invalid data
- **Nearby killed mutants:** `ObjectLiteral`: expected [] to deeply equal [ 'application/json' ]

- **Original (snippet):** `{ o: -1, q: 0, s: 0, i: index }`

### Survivor 65 — Line 313
- **ID:** `456`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 313 (col 57–4)
- **Tests completed:** 12
- **Covered by:** Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Request properties req.accepts methods share cached Accepts instance; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.types() with arguments should ignore invalid data
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
- **Covered by:** Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Request properties req.accepts methods share cached Accepts instance; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option); new Accepts(req) accepts.types() with arguments should ignore invalid data

- **Original (snippet):** `s |= 4`

### Survivor 67 — Line 320
- **ID:** `469`
- **Mutator:** `AssignmentOperator`
- **Replacement:** `s &= 2`
- **Location:** Line 320 (col 5–11)
- **Tests completed:** 10
- **Covered by:** Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Request properties req.accepts methods share cached Accepts instance; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option)

- **Original (snippet):** `s |= 2`

### Survivor 68 — Line 326
- **ID:** `475`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 326 (col 7–22)
- **Tests completed:** 16
- **Covered by:** Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Request properties req.accepts methods share cached Accepts instance; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should handle wildcard */*; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option)
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'text/html;level=2' ] to deeply equal []; `EqualityOperator`: expected [ 'text/html;level=2' ] to deeply equal []; `BlockStatement`: expected [ 'text/html;level=2' ] to deeply equal []

- **Original (snippet):** `if (keys.length > 0) {`

### Survivor 69 — Line 326
- **ID:** `477`
- **Mutator:** `EqualityOperator`
- **Replacement:** `keys.length >= 0`
- **Location:** Line 326 (col 7–22)
- **Tests completed:** 16
- **Covered by:** Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Request properties req.accepts methods share cached Accepts instance; Negotiator mediaTypes() should filter by provided media types; Negotiator mediaTypes() should handle wildcard */*; Negotiator mediaTypes() should handle type wildcard */subtype; Negotiator mediaTypes() should handle media type parameters; Negotiator mediaTypes() should not match when media type parameters differ; Negotiator mediaTypes() should prefer more specific media types; Negotiator mediaTypes() should match wildcard parameter value; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order; new Accepts(req) accepts.types() with arguments when Accept is populated it should prioritize according to the request order (second option)
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

## File: `packages/app/src/app.ts`

### Survivor 92 — Line 22
- **ID:** `617`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 22 (col 31–64)
- **Tests completed:** 168
- **Covered by:** Testing App should launch a basic server; Testing App Custom noMatchHandler works; Testing App Custom onError works; Testing App App works with HTTP 1.1; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should throw 404 on no routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; HTTP methods HEAD request does not work for undefined handlers; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /router/list" should have status code 200 but was 404 (body was:...; `EqualityOperator`: Request "GET /router/list" should have status code 200 but was 404 (body was:...; `ArithmeticOperator`: Request "GET /router/list" should have status code 200 but was 404 (body was:...; `MethodExpression`: Request "GET /router/list" should have status code 200 but was 404 (body was:...; `ArithmeticOperator`: Request "GET /router/list" should have status code 200 but was 404 (body was:...

- **Original (snippet):** `const trail = (x: string) => (x.charCodeAt(x.length - 1) === 47 ? x.substring(0, x.length - 1) : x)`

### Survivor 93 — Line 32
- **ID:** `631`
- **Mutator:** `OptionalChaining`
- **Replacement:** `next(e)`
- **Location:** Line 32 (col 5–14)
- **Tests completed:** 6
- **Covered by:** Testing App routing next(err) errors in sync wares do not destroy the app; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should throw error when x-forwarded-host has malformed port

- **Original (snippet):** `next?.(e)`

### Survivor 94 — Line 40
- **ID:** `636`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 40 (col 9–30)
- **Tests completed:** 5
- **Covered by:** Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; Request properties URL extensions should rewrite req.url and return 404 if route not found
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /empty/anything" should have status code 404 but was 204 (body w...; `EqualityOperator`: Request "GET /errorPage" should have status code 404 but was 204 (body was: )...

- **Original (snippet):** `if (req.method === 'HEAD') {`

### Survivor 95 — Line 40
- **ID:** `638`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 40 (col 24–30)
- **Tests completed:** 5
- **Covered by:** Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; Request properties URL extensions should rewrite req.url and return 404 if route not found
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /empty/anything" should have status code 404 but was 204 (body w...; `EqualityOperator`: Request "GET /errorPage" should have status code 404 but was 204 (body was: )...

- **Original (snippet):** `if (req.method === 'HEAD') {`

### Survivor 96 — Line 44
- **ID:** `641`
- **Mutator:** `OptionalChaining`
- **Replacement:** `next()`
- **Location:** Line 44 (col 5–13)
- **Tests completed:** 5
- **Covered by:** Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; Request properties URL extensions should rewrite req.url and return 404 if route not found

- **Original (snippet):** `next?.()`

### Survivor 97 — Line 88
- **ID:** `647`
- **Mutator:** `OptionalChaining`
- **Replacement:** `options.onError`
- **Location:** Line 88 (col 20–36)
- **Tests completed:** 202
- **Covered by:** Testing App should launch a basic server; Testing App should chain middleware; Testing App app.locals are get and set; Testing App Custom noMatchHandler works; Testing App Custom onError works; Testing App App works with HTTP 1.1; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should throw 404 on no routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods `app.set` sets a setting; App methods app.enable enables a setting; App methods app.disable disables a setting; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; HTTP methods HEAD request does not work for undefined handlers; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps sub-app mounts on a specific path; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps sub-app gets mounted via `app.route`; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps should mount app on a specified path; Subapps should mount on "/" if path is not specified; Subapps app.parent should reference to the app it was mounted on; Subapps app.path() should return the mountpath; Subapps app.path() should nest mountpaths; Subapps app.path() should nest multiple mountpaths for a single subapp; Subapps app.path() should nest multiple mountpaths for multiple subapp; Subapps middlewares of a subapp should preserve the path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.engine registers a new engine; Template engines app.engine appends a dot if not passed; Template engines app.render should support absolute paths; Template engines app.render should expose app.locals; Template engines app.render should support index files; Template engines app.render should work without a callback; Template engines app.render should use view cache in production mode; Template engines app.render should handle view engine with leading dot; Template engines app.render errors should catch errors; Template engines app.render errors when the file does not exist should provide a helpful error; Template engines app.render errors when error occurs should trigger a callback; Template engines app.render multiple roots should lookup the file in paths; Template engines app.render multiple roots should look until the file is found; Template engines app.render multiple roots should error if could not find the file; Template engines app.render supports custom View; Template engines app.render caching should always lookup view without cache; Template engines app.render caching should cache with "view cache" setting; Template engines app.render caching should respect explicit cache option passed to render(); Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy is enabled by default; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: this.onError.bind is not a function; `ConditionalExpression`: this.onError.bind is not a function; `LogicalOperator`: Cannot read properties of undefined (reading 'bind')

- **Original (snippet):** `this.onError = options?.onError || onErrorHandler`

### Survivor 98 — Line 90
- **ID:** `651`
- **Mutator:** `OptionalChaining`
- **Replacement:** `options.noMatchHandler`
- **Location:** Line 90 (col 27–50)
- **Tests completed:** 202
- **Covered by:** Testing App should launch a basic server; Testing App should chain middleware; Testing App app.locals are get and set; Testing App Custom noMatchHandler works; Testing App Custom onError works; Testing App App works with HTTP 1.1; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should throw 404 on no routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods `app.set` sets a setting; App methods app.enable enables a setting; App methods app.disable disables a setting; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; HTTP methods HEAD request does not work for undefined handlers; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps sub-app mounts on a specific path; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps sub-app gets mounted via `app.route`; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps should mount app on a specified path; Subapps should mount on "/" if path is not specified; Subapps app.parent should reference to the app it was mounted on; Subapps app.path() should return the mountpath; Subapps app.path() should nest mountpaths; Subapps app.path() should nest multiple mountpaths for a single subapp; Subapps app.path() should nest multiple mountpaths for multiple subapp; Subapps middlewares of a subapp should preserve the path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.engine registers a new engine; Template engines app.engine appends a dot if not passed; Template engines app.render should support absolute paths; Template engines app.render should expose app.locals; Template engines app.render should support index files; Template engines app.render should work without a callback; Template engines app.render should use view cache in production mode; Template engines app.render should handle view engine with leading dot; Template engines app.render errors should catch errors; Template engines app.render errors when the file does not exist should provide a helpful error; Template engines app.render errors when error occurs should trigger a callback; Template engines app.render multiple roots should lookup the file in paths; Template engines app.render multiple roots should look until the file is found; Template engines app.render multiple roots should error if could not find the file; Template engines app.render supports custom View; Template engines app.render caching should always lookup view without cache; Template engines app.render caching should cache with "view cache" setting; Template engines app.render caching should respect explicit cache option passed to render(); Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy is enabled by default; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have status code 404 but was 500 (body was: h is not a...; `ConditionalExpression`: Request "GET /" should have status code 404 but was 500 (body was: h is not a...; `LogicalOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ObjectLiteral`: Request "GET /" should have status code 404 but was 500 (body was: )
+ actual...

- **Original (snippet):** `this.noMatchHandler = options?.noMatchHandler || this.onError.bind(this, { code: 404 })`

### Survivor 99 — Line 95
- **ID:** `656`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 95 (col 21–58)
- **Tests completed:** 202
- **Covered by:** Testing App should launch a basic server; Testing App should chain middleware; Testing App app.locals are get and set; Testing App Custom noMatchHandler works; Testing App Custom onError works; Testing App App works with HTTP 1.1; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should throw 404 on no routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods `app.set` sets a setting; App methods app.enable enables a setting; App methods app.disable disables a setting; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; HTTP methods HEAD request does not work for undefined handlers; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps sub-app mounts on a specific path; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps sub-app gets mounted via `app.route`; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps should mount app on a specified path; Subapps should mount on "/" if path is not specified; Subapps app.parent should reference to the app it was mounted on; Subapps app.path() should return the mountpath; Subapps app.path() should nest mountpaths; Subapps app.path() should nest multiple mountpaths for a single subapp; Subapps app.path() should nest multiple mountpaths for multiple subapp; Subapps middlewares of a subapp should preserve the path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.engine registers a new engine; Template engines app.engine appends a dot if not passed; Template engines app.render should support absolute paths; Template engines app.render should expose app.locals; Template engines app.render should support index files; Template engines app.render should work without a callback; Template engines app.render should use view cache in production mode; Template engines app.render should handle view engine with leading dot; Template engines app.render errors should catch errors; Template engines app.render errors when the file does not exist should provide a helpful error; Template engines app.render errors when error occurs should trigger a callback; Template engines app.render multiple roots should lookup the file in paths; Template engines app.render multiple roots should look until the file is found; Template engines app.render multiple roots should error if could not find the file; Template engines app.render supports custom View; Template engines app.render caching should always lookup view without cache; Template engines app.render caching should cache with "view cache" setting; Template engines app.render caching should respect explicit cache option passed to render(); Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy is enabled by default; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: expected undefined to be defined; `EqualityOperator`: expected undefined to be defined; `StringLiteral`: expected undefined to be defined

- **Original (snippet):** `'view cache': process.env.NODE_ENV === 'production',`

### Survivor 100 — Line 99
- **ID:** `660`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 99 (col 9–32)
- **Tests completed:** 202
- **Covered by:** Testing App should launch a basic server; Testing App should chain middleware; Testing App app.locals are get and set; Testing App Custom noMatchHandler works; Testing App Custom onError works; Testing App App works with HTTP 1.1; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should throw 404 on no routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods `app.set` sets a setting; App methods app.enable enables a setting; App methods app.disable disables a setting; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; HTTP methods HEAD request does not work for undefined handlers; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps sub-app mounts on a specific path; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps sub-app gets mounted via `app.route`; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps should mount app on a specified path; Subapps should mount on "/" if path is not specified; Subapps app.parent should reference to the app it was mounted on; Subapps app.path() should return the mountpath; Subapps app.path() should nest mountpaths; Subapps app.path() should nest multiple mountpaths for a single subapp; Subapps app.path() should nest multiple mountpaths for multiple subapp; Subapps middlewares of a subapp should preserve the path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.engine registers a new engine; Template engines app.engine appends a dot if not passed; Template engines app.render should support absolute paths; Template engines app.render should expose app.locals; Template engines app.render should support index files; Template engines app.render should work without a callback; Template engines app.render should use view cache in production mode; Template engines app.render should handle view engine with leading dot; Template engines app.render errors should catch errors; Template engines app.render errors when the file does not exist should provide a helpful error; Template engines app.render errors when error occurs should trigger a callback; Template engines app.render multiple roots should lookup the file in paths; Template engines app.render multiple roots should look until the file is found; Template engines app.render multiple roots should error if could not find the file; Template engines app.render supports custom View; Template engines app.render caching should always lookup view without cache; Template engines app.render caching should cache with "view cache" setting; Template engines app.render caching should respect explicit cache option passed to render(); Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy is enabled by default; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have status code 200 but was 500 (body was: expected u...

- **Original (snippet):** `if (options.applyExtensions) this.applyExtensions = options?.applyExtensions`

### Survivor 101 — Line 99
- **ID:** `662`
- **Mutator:** `OptionalChaining`
- **Replacement:** `options.applyExtensions`
- **Location:** Line 99 (col 57–81)
- **Tests completed:** 1
- **Covered by:** App settings applyExtensions should use custom applyExtensions function when provided
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have status code 200 but was 500 (body was: expected u...

- **Original (snippet):** `if (options.applyExtensions) this.applyExtensions = options?.applyExtensions`

### Survivor 102 — Line 149
- **ID:** `679`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 149 (col 9–16)
- **Tests completed:** 27
- **Covered by:** Template engines app.render should support absolute paths; Template engines app.render should expose app.locals; Template engines app.render should support index files; Template engines app.render should work without a callback; Template engines app.render should use view cache in production mode; Template engines app.render should handle view engine with leading dot; Template engines app.render errors should catch errors; Template engines app.render errors when the file does not exist should provide a helpful error; Template engines app.render errors when error occurs should trigger a callback; Template engines app.render multiple roots should lookup the file in paths; Template engines app.render multiple roots should look until the file is found; Template engines app.render multiple roots should error if could not find the file; Template engines app.render supports custom View; Template engines app.render caching should always lookup view without cache; Template engines app.render caching should cache with "view cache" setting; Template engines app.render caching should respect explicit cache option passed to render(); Template engines app.render caching should use default View class when no custom view is set; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ObjectLiteral`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `if (_locals) locals = { ...locals, ..._locals }`

### Survivor 103 — Line 171
- **ID:** `696`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 171 (col 11–21)
- **Tests completed:** 23
- **Covered by:** Template engines app.render should support absolute paths; Template engines app.render should expose app.locals; Template engines app.render should support index files; Template engines app.render should work without a callback; Template engines app.render should use view cache in production mode; Template engines app.render should handle view engine with leading dot; Template engines app.render errors should catch errors; Template engines app.render errors when error occurs should trigger a callback; Template engines app.render multiple roots should lookup the file in paths; Template engines app.render multiple roots should look until the file is found; Template engines app.render supports custom View; Template engines app.render caching should always lookup view without cache; Template engines app.render caching should cache with "view cache" setting; Template engines app.render caching should respect explicit cache option passed to render(); Template engines app.render caching should use default View class when no custom view is set; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals
- **Nearby killed mutants:** `ConditionalExpression`: expected undefined to be defined; `BlockStatement`: expected undefined to be defined

- **Original (snippet):** `if (opts.cache) {`

### Survivor 104 — Line 178
- **ID:** `700`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 178 (col 19–6)
- **Tests completed:** 1
- **Covered by:** Template engines app.render errors should catch errors

- **Original (snippet):** `} catch (err) {
      cb(err)
    }`

### Survivor 105 — Line 192
- **ID:** `712`
- **Mutator:** `ArrayDeclaration`
- **Replacement:** `["Stryker was here"]`
- **Location:** Line 192 (col 33–35)
- **Tests completed:** 43
- **Covered by:** Testing App routing should add routes added before app.use; Testing App routing should match wares containing base path; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) middleware is only executed once even when matched multiple times; App methods app.route works properly; App methods app.route supports chaining route methods; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Subapps sub-app mounts on a specific path; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps sub-app gets mounted via `app.route`; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps should mount app on a specified path; Subapps app.path() should return the mountpath; Subapps app.path() should nest mountpaths; Subapps app.path() should nest multiple mountpaths for a single subapp; Subapps app.path() should nest multiple mountpaths for multiple subapp; Subapps middlewares of a subapp should preserve the path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings returns the correct middleware if there are more than one; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found

- **Original (snippet):** `let basePaths: string[] = []`

### Survivor 106 — Line 194
- **ID:** `715`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 194 (col 16–40)
- **Tests completed:** 40
- **Covered by:** Testing App routing should add routes added before app.use; Testing App routing should match wares containing base path; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) middleware is only executed once even when matched multiple times; App methods app.route works properly; App methods app.route supports chaining route methods; Route handlers router accepts array of middlewares; Subapps sub-app mounts on a specific path; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps sub-app gets mounted via `app.route`; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps should mount app on a specified path; Subapps app.path() should return the mountpath; Subapps app.path() should nest mountpaths; Subapps app.path() should nest multiple mountpaths for a single subapp; Subapps middlewares of a subapp should preserve the path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; App.use with array of paths should handle single string path; App settings returns the correct middleware if there are more than one; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /router/list" should have status code 200 but was 404 (body was:...; `EqualityOperator`: Request "GET /abc/def" should have expected body
+ actual - expected

  {
+  ...; `StringLiteral`: Request "GET /router/list" should have status code 200 but was 404 (body was:...; `ArrayDeclaration`: Request "GET /router/list" should have status code 200 but was 404 (body was:...

- **Original (snippet):** `else if (typeof base === 'string') basePaths = [base]`

### Survivor 107 — Line 224
- **ID:** `743`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 224 (col 31–43)
- **Tests completed:** 119
- **Covered by:** Testing App should launch a basic server; Testing App should chain middleware; Testing App Custom onError works; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should match wares containing base path; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods app.route works properly; App methods app.route supports chaining route methods; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Subapps sub-app mounts on a specific path; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps sub-app gets mounted via `app.route`; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps should mount app on a specified path; Subapps should mount on "/" if path is not specified; Subapps app.parent should reference to the app it was mounted on; Subapps app.path() should return the mountpath; Subapps app.path() should nest mountpaths; Subapps app.path() should nest multiple mountpaths for a single subapp; Subapps app.path() should nest multiple mountpaths for multiple subapp; Subapps middlewares of a subapp should preserve the path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /router/list" should have status code 200 but was 404 (body was:...; `EqualityOperator`: Request "GET /router/list" should have status code 200 but was 404 (body was:...; `StringLiteral`: Request "GET /" should have status code 200 but was 404 (body was: Not Found)...

- **Original (snippet):** `const handlerPathBase = path === '/' ? '' : lead(path)`

### Survivor 108 — Line 224
- **ID:** `745`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 224 (col 40–43)
- **Tests completed:** 119
- **Covered by:** Testing App should launch a basic server; Testing App should chain middleware; Testing App Custom onError works; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should match wares containing base path; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods app.route works properly; App methods app.route supports chaining route methods; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Subapps sub-app mounts on a specific path; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps sub-app gets mounted via `app.route`; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps should mount app on a specified path; Subapps should mount on "/" if path is not specified; Subapps app.parent should reference to the app it was mounted on; Subapps app.path() should return the mountpath; Subapps app.path() should nest mountpaths; Subapps app.path() should nest multiple mountpaths for a single subapp; Subapps app.path() should nest multiple mountpaths for multiple subapp; Subapps middlewares of a subapp should preserve the path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /router/list" should have status code 200 but was 404 (body was:...; `EqualityOperator`: Request "GET /router/list" should have status code 200 but was 404 (body was:...; `StringLiteral`: Request "GET /" should have status code 200 but was 404 (body was: Not Found)...

- **Original (snippet):** `const handlerPathBase = path === '/' ? '' : lead(path)`

### Survivor 109 — Line 226
- **ID:** `751`
- **Mutator:** `OptionalChaining`
- **Replacement:** `fn.middleware.length`
- **Location:** Line 226 (col 34–55)
- **Tests completed:** 36
- **Covered by:** Testing App routing should add routes added before app.use; Testing App routing should can set url prefix for the application; App methods app.route works properly; App methods app.route supports chaining route methods; Subapps sub-app mounts on a specific path; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps sub-app gets mounted via `app.route`; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps should mount app on a specified path; Subapps should mount on "/" if path is not specified; Subapps app.parent should reference to the app it was mounted on; Subapps app.path() should return the mountpath; Subapps app.path() should nest mountpaths; Subapps app.path() should nest multiple mountpaths for a single subapp; Subapps app.path() should nest multiple mountpaths for multiple subapp; Subapps middlewares of a subapp should preserve the path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw
- **Nearby killed mutants:** `ConditionalExpression`: fn.middleware is not iterable; `ConditionalExpression`: Request "GET /abc/route2" should have status code 200 but was 404 (body was: ...; `LogicalOperator`: Request "GET /" should have status code 200 but was 500 (body was: h is not a...; `BlockStatement`: Request "GET /router/list" should have status code 200 but was 500 (body was:...

- **Original (snippet):** `if (fn instanceof App && fn.middleware?.length) {`

### Survivor 110 — Line 250
- **ID:** `761`
- **Mutator:** `ObjectLiteral`
- **Replacement:** `{}`
- **Location:** Line 250 (col 25–52)
- **Tests completed:** 6
- **Covered by:** App methods app.route works properly; App methods app.route supports chaining route methods; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps sub-app gets mounted via `app.route`

- **Original (snippet):** `const app = new App({ settings: this.settings })`

### Survivor 111 — Line 264
- **ID:** `776`
- **Mutator:** `OptionalChaining`
- **Replacement:** `m.regex.pattern`
- **Location:** Line 264 (col 12–28)
- **Tests completed:** 165
- **Covered by:** Testing App should launch a basic server; Testing App Custom onError works; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; HTTP methods HEAD request does not work for undefined handlers; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `BooleanLiteral`: Request "GET /" should have status code 200 but was 404 (body was: Not Found)...; `ConditionalExpression`: Request "GET /" should have status code 200 but was 404 (body was: Not Found)...; `ConditionalExpression`: Request "GET /router/find" should have expected body
+ actual - expected

  {...; `BlockStatement`: Request "GET /router/find" should have expected body
+ actual - expected

  {...

- **Original (snippet):** `if (!m.regex?.pattern.test(url)) {`

### Survivor 112 — Line 268
- **ID:** `782`
- **Mutator:** `LogicalOperator`
- **Replacement:** `m.type === 'mw' || m.fullPathRegex`
- **Location:** Line 268 (col 11–45)
- **Tests completed:** 164
- **Covered by:** Testing App should launch a basic server; Testing App Custom onError works; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have status code 200 but was 404 (body was: Not Found)...; `ConditionalExpression`: Request "GET /abc/route2" should have status code 200 but was 404 (body was: ...; `LogicalOperator`: Request "GET /" should have status code 200 but was 404 (body was: Not Found)...; `ConditionalExpression`: Request "GET /router/list" should have status code 200 but was 500 (body was:...; `EqualityOperator`: Request "GET /abc/route2" should have status code 200 but was 404 (body was: ...

- **Original (snippet):** `if (m.type === 'mw' && m.fullPathRegex && !m.fullPathRegex.pattern.test(url)) {`

### Survivor 113 — Line 268
- **ID:** `783`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 268 (col 11–26)
- **Tests completed:** 164
- **Covered by:** Testing App should launch a basic server; Testing App Custom onError works; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have status code 200 but was 404 (body was: Not Found)...; `ConditionalExpression`: Request "GET /abc/route2" should have status code 200 but was 404 (body was: ...; `LogicalOperator`: Request "GET /" should have status code 200 but was 404 (body was: Not Found)...; `ConditionalExpression`: Request "GET /router/list" should have status code 200 but was 500 (body was:...; `EqualityOperator`: Request "GET /abc/route2" should have status code 200 but was 404 (body was: ...

- **Original (snippet):** `if (m.type === 'mw' && m.fullPathRegex && !m.fullPathRegex.pattern.test(url)) {`

### Survivor 114 — Line 302
- **ID:** `814`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 302 (col 15–19)
- **Tests completed:** 168
- **Covered by:** Testing App should launch a basic server; Testing App Custom noMatchHandler works; Testing App Custom onError works; Testing App App works with HTTP 1.1; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should throw 404 on no routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; HTTP methods HEAD request does not work for undefined handlers; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF

- **Original (snippet):** `type: 'mw',`

### Survivor 115 — Line 303
- **ID:** `815`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 303 (col 15–18)
- **Tests completed:** 168
- **Covered by:** Testing App should launch a basic server; Testing App Custom noMatchHandler works; Testing App Custom onError works; Testing App App works with HTTP 1.1; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should throw 404 on no routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; HTTP methods HEAD request does not work for undefined handlers; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF

- **Original (snippet):** `path: '/'`

### Survivor 116 — Line 318
- **ID:** `820`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 318 (col 13–34)
- **Tests completed:** 1
- **Covered by:** Subapps sends bad request on malformed params
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /%" should have status code 400 but was 500 (body was: URI malfo...

- **Original (snippet):** `if (e instanceof URIError) return res.sendStatus(400)`

### Survivor 117 — Line 326
- **ID:** `831`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 326 (col 37–40)
- **Tests completed:** 5
- **Covered by:** Testing App routing "*" should catch all undefined routes; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten

- **Original (snippet):** `prefix = prefix.replace('*', params.wild)`

### Survivor 118 — Line 342
- **ID:** `843`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 342 (col 11–40)
- **Tests completed:** 168
- **Covered by:** Testing App should launch a basic server; Testing App Custom noMatchHandler works; Testing App Custom onError works; Testing App App works with HTTP 1.1; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should throw 404 on no routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; HTTP methods HEAD request does not work for undefined handlers; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have status code 200 but was 500 (body was: expected u...

- **Original (snippet):** `if (this.settings?.enableReqRoute) req.route = middleware`

### Survivor 119 — Line 342
- **ID:** `845`
- **Mutator:** `OptionalChaining`
- **Replacement:** `this.settings.enableReqRoute`
- **Location:** Line 342 (col 11–40)
- **Tests completed:** 168
- **Covered by:** Testing App should launch a basic server; Testing App Custom noMatchHandler works; Testing App Custom onError works; Testing App App works with HTTP 1.1; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should throw 404 on no routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; HTTP methods HEAD request does not work for undefined handlers; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have status code 200 but was 500 (body was: expected u...

- **Original (snippet):** `if (this.settings?.enableReqRoute) req.route = middleware`

### Survivor 120 — Line 354
- **ID:** `851`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 354 (col 29–48)
- **Tests completed:** 164
- **Covered by:** Testing App should launch a basic server; Testing App Custom onError works; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `ConditionalExpression`: Request "GET /" should have status code 200 but was 404 (body was: Not Found)...; `LogicalOperator`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `EqualityOperator`: Request "GET /" should have status code 200 but was 404 (body was: Not Found)...; `BlockStatement`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...

- **Original (snippet):** `if (matched.length && matched[0] !== null) {`

### Survivor 121 — Line 363
- **ID:** `863`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 363 (col 17–24)
- **Tests completed:** 165
- **Covered by:** Testing App should launch a basic server; Testing App Custom noMatchHandler works; Testing App Custom onError works; Testing App App works with HTTP 1.1; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should throw 404 on no routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; HTTP methods HEAD request does not work for undefined handlers; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF

- **Original (snippet):** `type: 'route',`

### Survivor 122 — Line 364
- **ID:** `864`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 364 (col 17–20)
- **Tests completed:** 165
- **Covered by:** Testing App should launch a basic server; Testing App Custom noMatchHandler works; Testing App Custom onError works; Testing App App works with HTTP 1.1; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should throw 404 on no routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; HTTP methods HEAD request does not work for undefined handlers; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF

- **Original (snippet):** `path: '/'`

### Survivor 123 — Line 380
- **ID:** `878`
- **Mutator:** `OptionalChaining`
- **Replacement:** `parentNext()`
- **Location:** Line 380 (col 9–23)
- **Tests completed:** 6
- **Covered by:** Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware

- **Original (snippet):** `parentNext?.()`

## File: `packages/app/src/onError.ts`

### Survivor 124 — Line 10
- **ID:** `886`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 10 (col 7–38)
- **Tests completed:** 22
- **Covered by:** Testing App App works with HTTP 1.1; Testing App routing should match wares containing base path; Testing App routing should throw 404 on no routes; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; HTTP methods HEAD request does not work for undefined handlers; Route handlers router methods do not match loosely; Subapps handles errors by parent when no onError specified; Subapps should handle empty sub-app with no middleware; App.use with array of paths should handle array of string paths; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit headers catches errors and calls nextFunction; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should handle store error in incr callback; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should throw error when x-forwarded-host has malformed port
- **Nearby killed mutants:** `ConditionalExpression`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `ConditionalExpression`: Request "GET /subapp/route" should have expected body
+ actual - expected

  ...; `LogicalOperator`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `EqualityOperator`: Request "GET /subapp/route" should have expected body
+ actual - expected

  ...

- **Original (snippet):** `if (this.onError === onErrorHandler && this.parent) return this.parent.onError(err, _req, res)`

### Survivor 125 — Line 12
- **ID:** `888`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 12 (col 7–27)
- **Tests completed:** 21
- **Covered by:** Testing App App works with HTTP 1.1; Testing App routing should match wares containing base path; Testing App routing should throw 404 on no routes; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; HTTP methods HEAD request does not work for undefined handlers; Route handlers router methods do not match loosely; Subapps should handle empty sub-app with no middleware; App.use with array of paths should handle array of string paths; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit headers catches errors and calls nextFunction; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should handle store error in incr callback; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should throw error when x-forwarded-host has malformed port

- **Original (snippet):** `if (err instanceof Error) console.error(err)`

### Survivor 126 — Line 12
- **ID:** `889`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 12 (col 7–27)
- **Tests completed:** 21
- **Covered by:** Testing App App works with HTTP 1.1; Testing App routing should match wares containing base path; Testing App routing should throw 404 on no routes; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; HTTP methods HEAD request does not work for undefined handlers; Route handlers router methods do not match loosely; Subapps should handle empty sub-app with no middleware; App.use with array of paths should handle array of string paths; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit headers catches errors and calls nextFunction; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should handle store error in incr callback; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should throw error when x-forwarded-host has malformed port

- **Original (snippet):** `if (err instanceof Error) console.error(err)`

## File: `packages/app/src/request.ts`

### Survivor 127 — Line 27
- **ID:** `909`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 27 (col 7–38)
- **Tests completed:** 25
- **Covered by:** Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP
- **Nearby killed mutants:** `BooleanLiteral`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `if (!trustRemoteAddress(req, trust)) return proto`

### Survivor 128 — Line 33
- **ID:** `918`
- **Mutator:** `MethodExpression`
- **Replacement:** `header.substring(0, index)`
- **Location:** Line 33 (col 25–58)
- **Tests completed:** 1
- **Covered by:** Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `UnaryOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `MethodExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `return index !== -1 ? header.substring(0, index).trim() : header.trim()`

### Survivor 129 — Line 33
- **ID:** `920`
- **Mutator:** `MethodExpression`
- **Replacement:** `header`
- **Location:** Line 33 (col 61–74)
- **Tests completed:** 5
- **Covered by:** Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `UnaryOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `MethodExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `return index !== -1 ? header.substring(0, index).trim() : header.trim()`

### Survivor 130 — Line 43
- **ID:** `931`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 43 (col 7–19)
- **Tests completed:** 6
- **Covered by:** Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should return hostname when :authority and host headers match
- **Nearby killed mutants:** `ConditionalExpression`: expected 'hostname: userinfo@bar.baz' to deeply equal 'hostname: bar.baz'; `EqualityOperator`: expected 'hostname: userinfo@bar.baz' to deeply equal 'hostname: bar.baz'

- **Original (snippet):** `if (index === -1) return normalizeHostString(authority)`

### Survivor 131 — Line 43
- **ID:** `933`
- **Mutator:** `UnaryOperator`
- **Replacement:** `+1`
- **Location:** Line 43 (col 17–19)
- **Tests completed:** 6
- **Covered by:** Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should return hostname when :authority and host headers match
- **Nearby killed mutants:** `ConditionalExpression`: expected 'hostname: userinfo@bar.baz' to deeply equal 'hostname: bar.baz'; `EqualityOperator`: expected 'hostname: userinfo@bar.baz' to deeply equal 'hostname: bar.baz'

- **Original (snippet):** `if (index === -1) return normalizeHostString(authority)`

### Survivor 132 — Line 50
- **ID:** `942`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 50 (col 7–21)
- **Tests completed:** 5
- **Covered by:** Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port
- **Nearby killed mutants:** `BooleanLiteral`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `if (!forwardedHost) return undefined`

### Survivor 133 — Line 57
- **ID:** `949`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 57 (col 16–40)
- **Tests completed:** 17
- **Covered by:** Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return IP address as subdomain when hostname is an IP
- **Nearby killed mutants:** `ConditionalExpression`: expected [ 'hostname: foo.bar', …(1) ] to include 'hostname: undefined'; `ConditionalExpression`: expected 500 to be 200 // Object.is equality; `LogicalOperator`: expected 500 to be 200 // Object.is equality; `BooleanLiteral`: expected [ 'hostname: foo.bar', …(1) ] to include 'hostname: undefined'; `EqualityOperator`: expected [ 'hostname: foo.bar', …(1) ] to include 'hostname: undefined'

- **Original (snippet):** `if (!host || host.indexOf(',') !== -1) return undefined`

### Survivor 134 — Line 63
- **ID:** `954`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 63 (col 7–37)
- **Tests completed:** 25
- **Covered by:** Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have status code 200 but was 500 (body was: Request `:...; `BlockStatement`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `if (trustRemoteAddress(req, trust)) {`

### Survivor 135 — Line 65
- **ID:** `957`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 65 (col 9–22)
- **Tests completed:** 6
- **Covered by:** Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `if (forwardedHost) return forwardedHost`

### Survivor 136 — Line 73
- **ID:** `966`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 73 (col 23–93)
- **Tests completed:** 2
- **Covered by:** Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed

- **Original (snippet):** `throw new Error('Request `:authority` pseudo-header does not agree with `Host` header')`

### Survivor 137 — Line 85
- **ID:** `974`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 85 (col 35–50)
- **Tests completed:** 20
- **Covered by:** Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return IP address as subdomain when hostname is an IP
- **Nearby killed mutants:** `StringLiteral`: Request "GET /" should have status code 200 but was 500 (body was: Port numbe...; `ConditionalExpression`: Request "GET /" should have status code 200 but was 500 (body was: Port numbe...; `EqualityOperator`: Request "GET /" should have status code 200 but was 500 (body was: Port numbe...; `StringLiteral`: Request "GET /" should have status code 200 but was 500 (body was: Port numbe...; `StringLiteral`: Request "GET /" should have status code 200 but was 500 (body was: Port numbe...

- **Original (snippet):** `const index = host.indexOf(':', host[0] === '[' ? host.indexOf(']') + 1 : 0)`

### Survivor 138 — Line 85
- **ID:** `978`
- **Mutator:** `ArithmeticOperator`
- **Replacement:** `host.indexOf(']') - 1`
- **Location:** Line 85 (col 53–74)
- **Tests completed:** 1
- **Covered by:** Request properties Network extensions should parse IPv6 literal in host header
- **Nearby killed mutants:** `StringLiteral`: Request "GET /" should have status code 200 but was 500 (body was: Port numbe...; `ConditionalExpression`: Request "GET /" should have status code 200 but was 500 (body was: Port numbe...; `EqualityOperator`: Request "GET /" should have status code 200 but was 500 (body was: Port numbe...; `StringLiteral`: Request "GET /" should have status code 200 but was 500 (body was: Port numbe...; `StringLiteral`: Request "GET /" should have status code 200 but was 500 (body was: Port numbe...

- **Original (snippet):** `const index = host.indexOf(':', host[0] === '[' ? host.indexOf(']') + 1 : 0)`

### Survivor 139 — Line 90
- **ID:** `990`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 90 (col 47–96)
- **Tests completed:** 1
- **Covered by:** Request properties Network extensions should throw error when x-forwarded-host has malformed port
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have status code 200 but was 500 (body was: Port numbe...; `ConditionalExpression`: expected 200 to be 500 // Object.is equality

- **Original (snippet):** `if (Number.isNaN(port)) throw new TypeError('Port number is NaN, therefore Host is malformed')`

### Survivor 140 — Line 95
- **ID:** `993`
- **Mutator:** `Regex`
- **Replacement:** `/.*:/`
- **Location:** Line 95 (col 33–39)
- **Tests completed:** 22
- **Covered by:** Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP
- **Nearby killed mutants:** `StringLiteral`: expected { ip: 'Stryker was here!1', …(1) } to deeply equal { ip: '127.0.0.1'...

- **Original (snippet):** `proxyAddr(req, trust).replace(/^.*:/, '') // striping the redundant prefix addeded by OS to IPv4 address`

### Survivor 141 — Line 95
- **ID:** `994`
- **Mutator:** `Regex`
- **Replacement:** `/^.:/`
- **Location:** Line 95 (col 33–39)
- **Tests completed:** 22
- **Covered by:** Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP
- **Nearby killed mutants:** `StringLiteral`: expected { ip: 'Stryker was here!1', …(1) } to deeply equal { ip: '127.0.0.1'...

- **Original (snippet):** `proxyAddr(req, trust).replace(/^.*:/, '') // striping the redundant prefix addeded by OS to IPv4 address`

### Survivor 142 — Line 104
- **ID:** `1004`
- **Mutator:** `MethodExpression`
- **Replacement:** `host.hostname.split('.')`
- **Location:** Line 104 (col 62–96)
- **Tests completed:** 18
- **Covered by:** Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port
- **Nearby killed mutants:** `ArrayDeclaration`: Request "GET /" should have expected JSON body
+ actual - expected

  {
    b...; `StringLiteral`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `const subdomains = isIP(host.hostname) ? [host.hostname] : host.hostname.split('.').reverse()`

## File: `packages/app/src/view.ts`

### Survivor 143 — Line 17
- **ID:** `1015`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 17 (col 11–4)
- **Tests completed:** 5
- **Covered by:** Template engines app.render should support index files; Template engines app.render errors when the file does not exist should provide a helpful error; Template engines app.render multiple roots should look until the file is found; Template engines app.render multiple roots should error if could not find the file; Response methods res.render should support index files

- **Original (snippet):** `} catch {
    return undefined
  }`

### Survivor 144 — Line 42
- **ID:** `1016`
- **Mutator:** `ArrayDeclaration`
- **Replacement:** `["Stryker was here"]`
- **Location:** Line 42 (col 29–31)
- **Tests completed:** 22
- **Covered by:** Template engines app.render should support absolute paths; Template engines app.render should expose app.locals; Template engines app.render should support index files; Template engines app.render should work without a callback; Template engines app.render should use view cache in production mode; Template engines app.render should handle view engine with leading dot; Template engines app.render errors when the file does not exist should provide a helpful error; Template engines app.render errors when error occurs should trigger a callback; Template engines app.render multiple roots should lookup the file in paths; Template engines app.render multiple roots should look until the file is found; Template engines app.render multiple roots should error if could not find the file; Template engines app.render caching should use default View class when no custom view is set; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals

- **Original (snippet):** `root: string | string[] = []`

### Survivor 145 — Line 53
- **ID:** `1018`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 53 (col 9–18)
- **Tests completed:** 22
- **Covered by:** Template engines app.render should support absolute paths; Template engines app.render should expose app.locals; Template engines app.render should support index files; Template engines app.render should work without a callback; Template engines app.render should use view cache in production mode; Template engines app.render should handle view engine with leading dot; Template engines app.render errors when the file does not exist should provide a helpful error; Template engines app.render errors when error occurs should trigger a callback; Template engines app.render multiple roots should lookup the file in paths; Template engines app.render multiple roots should look until the file is found; Template engines app.render multiple roots should error if could not find the file; Template engines app.render caching should use default View class when no custom view is set; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `if (opts.root) this.root = opts.root`

### Survivor 146 — Line 54
- **ID:** `1020`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 54 (col 9–27)
- **Tests completed:** 22
- **Covered by:** Template engines app.render should support absolute paths; Template engines app.render should expose app.locals; Template engines app.render should support index files; Template engines app.render should work without a callback; Template engines app.render should use view cache in production mode; Template engines app.render should handle view engine with leading dot; Template engines app.render errors when the file does not exist should provide a helpful error; Template engines app.render errors when error occurs should trigger a callback; Template engines app.render multiple roots should lookup the file in paths; Template engines app.render multiple roots should look until the file is found; Template engines app.render multiple roots should error if could not find the file; Template engines app.render caching should use default View class when no custom view is set; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `if (opts.defaultEngine) this.defaultEngine = opts.defaultEngine`

### Survivor 147 — Line 63
- **ID:** `1035`
- **Mutator:** `OptionalChaining`
- **Replacement:** `this.defaultEngine[0]`
- **Location:** Line 63 (col 18–41)
- **Tests completed:** 5
- **Covered by:** Template engines app.render should support index files; Template engines app.render should handle view engine with leading dot; Template engines app.render caching should use default View class when no custom view is set; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should support index files
- **Nearby killed mutants:** `ConditionalExpression`: No engine was found for ..eta; `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `StringLiteral`: No engine was found for ..eta; `StringLiteral`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `this.ext = this.defaultEngine?.[0] !== '.' ? `.${this.defaultEngine}` : this.defaultEngine`

### Survivor 148 — Line 68
- **ID:** `1042`
- **Mutator:** `OptionalChaining`
- **Replacement:** `opts.engines[this.ext]`
- **Location:** Line 68 (col 10–34)
- **Tests completed:** 21
- **Covered by:** Template engines app.render should support absolute paths; Template engines app.render should expose app.locals; Template engines app.render should support index files; Template engines app.render should work without a callback; Template engines app.render should use view cache in production mode; Template engines app.render should handle view engine with leading dot; Template engines app.render errors when the file does not exist should provide a helpful error; Template engines app.render errors when error occurs should trigger a callback; Template engines app.render multiple roots should lookup the file in paths; Template engines app.render multiple roots should look until the file is found; Template engines app.render multiple roots should error if could not find the file; Template engines app.render caching should use default View class when no custom view is set; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals
- **Nearby killed mutants:** `BooleanLiteral`: No engine was found for .eta; `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `StringLiteral`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `if (!opts.engines?.[this.ext]) throw new Error(`No engine was found for ${this.ext}`)`

### Survivor 149 — Line 71
- **ID:** `1047`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 71 (col 35–55)
- **Tests completed:** 3
- **Covered by:** Template engines app.render multiple roots should lookup the file in paths; Template engines app.render multiple roots should look until the file is found; Template engines app.render multiple roots should error if could not find the file
- **Nearby killed mutants:** `ConditionalExpression`: this.root.slice(...).join is not a function; `ConditionalExpression`: expected 'Failed to lookup view "uknown.eta" in…' to match /Failed to lookup ...; `LogicalOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: expected 'Failed to lookup view "uknown.eta" in…' to match /Failed to lookup ...

- **Original (snippet):** `Array.isArray(this.root) && this.root.length > 1`

### Survivor 150 — Line 71
- **ID:** `1048`
- **Mutator:** `EqualityOperator`
- **Replacement:** `this.root.length >= 1`
- **Location:** Line 71 (col 35–55)
- **Tests completed:** 3
- **Covered by:** Template engines app.render multiple roots should lookup the file in paths; Template engines app.render multiple roots should look until the file is found; Template engines app.render multiple roots should error if could not find the file
- **Nearby killed mutants:** `ConditionalExpression`: this.root.slice(...).join is not a function; `ConditionalExpression`: expected 'Failed to lookup view "uknown.eta" in…' to match /Failed to lookup ...; `LogicalOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: expected 'Failed to lookup view "uknown.eta" in…' to match /Failed to lookup ...

- **Original (snippet):** `Array.isArray(this.root) && this.root.length > 1`

### Survivor 151 — Line 72
- **ID:** `1051`
- **Mutator:** `MethodExpression`
- **Replacement:** `this.root`
- **Location:** Line 72 (col 27–49)
- **Tests completed:** 3
- **Covered by:** Template engines app.render multiple roots should lookup the file in paths; Template engines app.render multiple roots should look until the file is found; Template engines app.render multiple roots should error if could not find the file
- **Nearby killed mutants:** `StringLiteral`: expected 'Failed to lookup view "uknown.eta" in…' to match /Failed to lookup ...

- **Original (snippet):** `? `directories "${this.root.slice(0, -1).join('", "')}" or "${this.root[this.root.length - 1]}"``

### Survivor 152 — Line 72
- **ID:** `1052`
- **Mutator:** `UnaryOperator`
- **Replacement:** `+1`
- **Location:** Line 72 (col 46–48)
- **Tests completed:** 3
- **Covered by:** Template engines app.render multiple roots should lookup the file in paths; Template engines app.render multiple roots should look until the file is found; Template engines app.render multiple roots should error if could not find the file
- **Nearby killed mutants:** `StringLiteral`: expected 'Failed to lookup view "uknown.eta" in…' to match /Failed to lookup ...

- **Original (snippet):** `? `directories "${this.root.slice(0, -1).join('", "')}" or "${this.root[this.root.length - 1]}"``

### Survivor 153 — Line 72
- **ID:** `1053`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 72 (col 55–61)
- **Tests completed:** 3
- **Covered by:** Template engines app.render multiple roots should lookup the file in paths; Template engines app.render multiple roots should look until the file is found; Template engines app.render multiple roots should error if could not find the file
- **Nearby killed mutants:** `StringLiteral`: expected 'Failed to lookup view "uknown.eta" in…' to match /Failed to lookup ...

- **Original (snippet):** `? `directories "${this.root.slice(0, -1).join('", "')}" or "${this.root[this.root.length - 1]}"``

### Survivor 154 — Line 72
- **ID:** `1054`
- **Mutator:** `ArithmeticOperator`
- **Replacement:** `this.root.length + 1`
- **Location:** Line 72 (col 81–101)
- **Tests completed:** 3
- **Covered by:** Template engines app.render multiple roots should lookup the file in paths; Template engines app.render multiple roots should look until the file is found; Template engines app.render multiple roots should error if could not find the file
- **Nearby killed mutants:** `StringLiteral`: expected 'Failed to lookup view "uknown.eta" in…' to match /Failed to lookup ...

- **Original (snippet):** `? `directories "${this.root.slice(0, -1).join('", "')}" or "${this.root[this.root.length - 1]}"``

## File: `packages/content-disposition/src/index.ts`

### Survivor 155 — Line 42
- **ID:** `1140`
- **Mutator:** `MethodExpression`
- **Replacement:** `String(char).charCodeAt(0).toString(16).toLowerCase()`
- **Location:** Line 42 (col 39–92)
- **Tests completed:** 1
- **Covered by:** contentDisposition(filename) should use pencode fn
- **Nearby killed mutants:** `StringLiteral`: expected 'html; filename="html"; filename*=UTF-…' to deeply equal 'html; file...

- **Original (snippet):** `const pencode = (char: string) => `%${String(char).charCodeAt(0).toString(16).toUpperCase()}``

### Survivor 156 — Line 62
- **ID:** `1150`
- **Mutator:** `LogicalOperator`
- **Replacement:** `(!type || typeof type !== 'string') && !TOKEN_REGEXP.test(type)`
- **Location:** Line 62 (col 7–68)
- **Tests completed:** 21
- **Covered by:** Response extensions res.attachment(filename) should set Content-Disposition without a filename specified; Response extensions res.attachment(filename) should set Content-Disposition with a filename specified; Response extensions res.download(filename) should set Content-Disposition based on path; Response extensions res.download(filename) should set Content-Disposition based on filename; Response extensions res.download(filename) should pass the error to a callback; Response extensions res.download(filename) should set "root" from options; Response extensions res.download(filename) 'should pass options to sendFile's ReadStream'; Response extensions res.download(filename) should set headers from options; Response extensions res.download(filename) should ignore Content-Disposition header in options (case-insensitive); Response extensions res.download(filename) should work without a callback; contentDisposition() should create an attachment header; contentDisposition(filename) should create a header with file name; contentDisposition(filename) should use the basename of the string; contentDisposition(filename) should use hasfallback; contentDisposition(filename) should use pencode fn; contentDisposition(filename) should use fallback when file ext is non ascii; contentDisposition(filename) should throw an error when non string options.type is used; contentDisposition(filename) should work when file name is empty; contentDisposition(filename) when "filename" is US-ASCII should only include filename parameter; contentDisposition(filename) when "filename" is US-ASCII should escape quotes; contentDisposition edge cases should handle filename with only filename* (no fallback, non-quoted)
- **Nearby killed mutants:** `ConditionalExpression`: invalid type; `ConditionalExpression`: expected number of assertions to be 1, but got 0; `BooleanLiteral`: invalid type; `EqualityOperator`: invalid type; `StringLiteral`: invalid type

- **Original (snippet):** `if (!type || typeof type !== 'string' || !TOKEN_REGEXP.test(type)) {`

### Survivor 157 — Line 62
- **ID:** `1151`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 62 (col 7–40)
- **Tests completed:** 21
- **Covered by:** Response extensions res.attachment(filename) should set Content-Disposition without a filename specified; Response extensions res.attachment(filename) should set Content-Disposition with a filename specified; Response extensions res.download(filename) should set Content-Disposition based on path; Response extensions res.download(filename) should set Content-Disposition based on filename; Response extensions res.download(filename) should pass the error to a callback; Response extensions res.download(filename) should set "root" from options; Response extensions res.download(filename) 'should pass options to sendFile's ReadStream'; Response extensions res.download(filename) should set headers from options; Response extensions res.download(filename) should ignore Content-Disposition header in options (case-insensitive); Response extensions res.download(filename) should work without a callback; contentDisposition() should create an attachment header; contentDisposition(filename) should create a header with file name; contentDisposition(filename) should use the basename of the string; contentDisposition(filename) should use hasfallback; contentDisposition(filename) should use pencode fn; contentDisposition(filename) should use fallback when file ext is non ascii; contentDisposition(filename) should throw an error when non string options.type is used; contentDisposition(filename) should work when file name is empty; contentDisposition(filename) when "filename" is US-ASCII should only include filename parameter; contentDisposition(filename) when "filename" is US-ASCII should escape quotes; contentDisposition edge cases should handle filename with only filename* (no fallback, non-quoted)
- **Nearby killed mutants:** `ConditionalExpression`: invalid type; `ConditionalExpression`: expected number of assertions to be 1, but got 0; `BooleanLiteral`: invalid type; `EqualityOperator`: invalid type; `StringLiteral`: invalid type

- **Original (snippet):** `if (!type || typeof type !== 'string' || !TOKEN_REGEXP.test(type)) {`

### Survivor 158 — Line 62
- **ID:** `1152`
- **Mutator:** `LogicalOperator`
- **Replacement:** `!type && typeof type !== 'string'`
- **Location:** Line 62 (col 7–40)
- **Tests completed:** 21
- **Covered by:** Response extensions res.attachment(filename) should set Content-Disposition without a filename specified; Response extensions res.attachment(filename) should set Content-Disposition with a filename specified; Response extensions res.download(filename) should set Content-Disposition based on path; Response extensions res.download(filename) should set Content-Disposition based on filename; Response extensions res.download(filename) should pass the error to a callback; Response extensions res.download(filename) should set "root" from options; Response extensions res.download(filename) 'should pass options to sendFile's ReadStream'; Response extensions res.download(filename) should set headers from options; Response extensions res.download(filename) should ignore Content-Disposition header in options (case-insensitive); Response extensions res.download(filename) should work without a callback; contentDisposition() should create an attachment header; contentDisposition(filename) should create a header with file name; contentDisposition(filename) should use the basename of the string; contentDisposition(filename) should use hasfallback; contentDisposition(filename) should use pencode fn; contentDisposition(filename) should use fallback when file ext is non ascii; contentDisposition(filename) should throw an error when non string options.type is used; contentDisposition(filename) should work when file name is empty; contentDisposition(filename) when "filename" is US-ASCII should only include filename parameter; contentDisposition(filename) when "filename" is US-ASCII should escape quotes; contentDisposition edge cases should handle filename with only filename* (no fallback, non-quoted)
- **Nearby killed mutants:** `ConditionalExpression`: invalid type; `ConditionalExpression`: expected number of assertions to be 1, but got 0; `BooleanLiteral`: invalid type; `EqualityOperator`: invalid type; `StringLiteral`: invalid type

- **Original (snippet):** `if (!type || typeof type !== 'string' || !TOKEN_REGEXP.test(type)) {`

### Survivor 159 — Line 62
- **ID:** `1154`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 62 (col 16–40)
- **Tests completed:** 21
- **Covered by:** Response extensions res.attachment(filename) should set Content-Disposition without a filename specified; Response extensions res.attachment(filename) should set Content-Disposition with a filename specified; Response extensions res.download(filename) should set Content-Disposition based on path; Response extensions res.download(filename) should set Content-Disposition based on filename; Response extensions res.download(filename) should pass the error to a callback; Response extensions res.download(filename) should set "root" from options; Response extensions res.download(filename) 'should pass options to sendFile's ReadStream'; Response extensions res.download(filename) should set headers from options; Response extensions res.download(filename) should ignore Content-Disposition header in options (case-insensitive); Response extensions res.download(filename) should work without a callback; contentDisposition() should create an attachment header; contentDisposition(filename) should create a header with file name; contentDisposition(filename) should use the basename of the string; contentDisposition(filename) should use hasfallback; contentDisposition(filename) should use pencode fn; contentDisposition(filename) should use fallback when file ext is non ascii; contentDisposition(filename) should throw an error when non string options.type is used; contentDisposition(filename) should work when file name is empty; contentDisposition(filename) when "filename" is US-ASCII should only include filename parameter; contentDisposition(filename) when "filename" is US-ASCII should escape quotes; contentDisposition edge cases should handle filename with only filename* (no fallback, non-quoted)
- **Nearby killed mutants:** `ConditionalExpression`: invalid type; `ConditionalExpression`: expected number of assertions to be 1, but got 0; `BooleanLiteral`: invalid type; `EqualityOperator`: invalid type; `StringLiteral`: invalid type

- **Original (snippet):** `if (!type || typeof type !== 'string' || !TOKEN_REGEXP.test(type)) {`

### Survivor 160 — Line 69
- **ID:** `1161`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 69 (col 7–51)
- **Tests completed:** 20
- **Covered by:** Response extensions res.attachment(filename) should set Content-Disposition without a filename specified; Response extensions res.attachment(filename) should set Content-Disposition with a filename specified; Response extensions res.download(filename) should set Content-Disposition based on path; Response extensions res.download(filename) should set Content-Disposition based on filename; Response extensions res.download(filename) should pass the error to a callback; Response extensions res.download(filename) should set "root" from options; Response extensions res.download(filename) 'should pass options to sendFile's ReadStream'; Response extensions res.download(filename) should set headers from options; Response extensions res.download(filename) should ignore Content-Disposition header in options (case-insensitive); Response extensions res.download(filename) should work without a callback; contentDisposition() should create an attachment header; contentDisposition(filename) should create a header with file name; contentDisposition(filename) should use the basename of the string; contentDisposition(filename) should use hasfallback; contentDisposition(filename) should use pencode fn; contentDisposition(filename) should use fallback when file ext is non ascii; contentDisposition(filename) should work when file name is empty; contentDisposition(filename) when "filename" is US-ASCII should only include filename parameter; contentDisposition(filename) when "filename" is US-ASCII should escape quotes; contentDisposition edge cases should handle filename with only filename* (no fallback, non-quoted)
- **Nearby killed mutants:** `ConditionalExpression`: expected 'attachment' to be 'attachment; filename="plans.pdf"' // Object.is e...; `EqualityOperator`: expected 'attachment' to be 'attachment; filename="plans.pdf"' // Object.is e...; `StringLiteral`: expected 'attachment' to be 'attachment; filename="plans.pdf"' // Object.is e...; `BlockStatement`: Request "GET /" should have correct header Content-Disposition"
+ actual - ex...

- **Original (snippet):** `if (parameters && typeof parameters === 'object') {`

### Survivor 161 — Line 69
- **ID:** `1163`
- **Mutator:** `LogicalOperator`
- **Replacement:** `parameters || typeof parameters === 'object'`
- **Location:** Line 69 (col 7–51)
- **Tests completed:** 20
- **Covered by:** Response extensions res.attachment(filename) should set Content-Disposition without a filename specified; Response extensions res.attachment(filename) should set Content-Disposition with a filename specified; Response extensions res.download(filename) should set Content-Disposition based on path; Response extensions res.download(filename) should set Content-Disposition based on filename; Response extensions res.download(filename) should pass the error to a callback; Response extensions res.download(filename) should set "root" from options; Response extensions res.download(filename) 'should pass options to sendFile's ReadStream'; Response extensions res.download(filename) should set headers from options; Response extensions res.download(filename) should ignore Content-Disposition header in options (case-insensitive); Response extensions res.download(filename) should work without a callback; contentDisposition() should create an attachment header; contentDisposition(filename) should create a header with file name; contentDisposition(filename) should use the basename of the string; contentDisposition(filename) should use hasfallback; contentDisposition(filename) should use pencode fn; contentDisposition(filename) should use fallback when file ext is non ascii; contentDisposition(filename) should work when file name is empty; contentDisposition(filename) when "filename" is US-ASCII should only include filename parameter; contentDisposition(filename) when "filename" is US-ASCII should escape quotes; contentDisposition edge cases should handle filename with only filename* (no fallback, non-quoted)
- **Nearby killed mutants:** `ConditionalExpression`: expected 'attachment' to be 'attachment; filename="plans.pdf"' // Object.is e...; `EqualityOperator`: expected 'attachment' to be 'attachment; filename="plans.pdf"' // Object.is e...; `StringLiteral`: expected 'attachment' to be 'attachment; filename="plans.pdf"' // Object.is e...; `BlockStatement`: Request "GET /" should have correct header Content-Disposition"
+ actual - ex...

- **Original (snippet):** `if (parameters && typeof parameters === 'object') {`

### Survivor 162 — Line 69
- **ID:** `1164`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 69 (col 21–51)
- **Tests completed:** 20
- **Covered by:** Response extensions res.attachment(filename) should set Content-Disposition without a filename specified; Response extensions res.attachment(filename) should set Content-Disposition with a filename specified; Response extensions res.download(filename) should set Content-Disposition based on path; Response extensions res.download(filename) should set Content-Disposition based on filename; Response extensions res.download(filename) should pass the error to a callback; Response extensions res.download(filename) should set "root" from options; Response extensions res.download(filename) 'should pass options to sendFile's ReadStream'; Response extensions res.download(filename) should set headers from options; Response extensions res.download(filename) should ignore Content-Disposition header in options (case-insensitive); Response extensions res.download(filename) should work without a callback; contentDisposition() should create an attachment header; contentDisposition(filename) should create a header with file name; contentDisposition(filename) should use the basename of the string; contentDisposition(filename) should use hasfallback; contentDisposition(filename) should use pencode fn; contentDisposition(filename) should use fallback when file ext is non ascii; contentDisposition(filename) should work when file name is empty; contentDisposition(filename) when "filename" is US-ASCII should only include filename parameter; contentDisposition(filename) when "filename" is US-ASCII should escape quotes; contentDisposition edge cases should handle filename with only filename* (no fallback, non-quoted)
- **Nearby killed mutants:** `ConditionalExpression`: expected 'attachment' to be 'attachment; filename="plans.pdf"' // Object.is e...; `EqualityOperator`: expected 'attachment' to be 'attachment; filename="plans.pdf"' // Object.is e...; `StringLiteral`: expected 'attachment' to be 'attachment; filename="plans.pdf"' // Object.is e...; `BlockStatement`: Request "GET /" should have correct header Content-Disposition"
+ actual - ex...

- **Original (snippet):** `if (parameters && typeof parameters === 'object') {`

### Survivor 163 — Line 95
- **ID:** `1193`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 95 (col 7–35)
- **Tests completed:** 19
- **Covered by:** Response extensions res.attachment(filename) should set Content-Disposition with a filename specified; Response extensions res.download(filename) should set Content-Disposition based on path; Response extensions res.download(filename) should set Content-Disposition based on filename; Response extensions res.download(filename) should pass the error to a callback; Response extensions res.download(filename) should set "root" from options; Response extensions res.download(filename) 'should pass options to sendFile's ReadStream'; Response extensions res.download(filename) should set headers from options; Response extensions res.download(filename) should ignore Content-Disposition header in options (case-insensitive); Response extensions res.download(filename) should work without a callback; contentDisposition(filename) should create a header with file name; contentDisposition(filename) should use the basename of the string; contentDisposition(filename) should throw an error when non latin fallback is used; contentDisposition(filename) should use hasfallback; contentDisposition(filename) should use pencode fn; contentDisposition(filename) should use fallback when file ext is non ascii; contentDisposition(filename) should throw an error when non string options.type is used; contentDisposition(filename) when "filename" is US-ASCII should only include filename parameter; contentDisposition(filename) when "filename" is US-ASCII should escape quotes; contentDisposition edge cases should handle filename with only filename* (no fallback, non-quoted)
- **Nearby killed mutants:** `ConditionalExpression`: fallback must be ISO-8859-1 string; `ConditionalExpression`: expected number of assertions to be 1, but got 0; `LogicalOperator`: fallback must be ISO-8859-1 string; `EqualityOperator`: expected number of assertions to be 1, but got 0; `StringLiteral`: expected number of assertions to be 1, but got 0

- **Original (snippet):** `if (typeof fallback === 'string' && NON_LATIN1_REGEXP.test(fallback)) {`

### Survivor 164 — Line 107
- **ID:** `1208`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 107 (col 23–55)
- **Tests completed:** 18
- **Covered by:** Response extensions res.attachment(filename) should set Content-Disposition with a filename specified; Response extensions res.download(filename) should set Content-Disposition based on path; Response extensions res.download(filename) should set Content-Disposition based on filename; Response extensions res.download(filename) should pass the error to a callback; Response extensions res.download(filename) should set "root" from options; Response extensions res.download(filename) 'should pass options to sendFile's ReadStream'; Response extensions res.download(filename) should set headers from options; Response extensions res.download(filename) should ignore Content-Disposition header in options (case-insensitive); Response extensions res.download(filename) should work without a callback; contentDisposition(filename) should create a header with file name; contentDisposition(filename) should use the basename of the string; contentDisposition(filename) should use hasfallback; contentDisposition(filename) should use pencode fn; contentDisposition(filename) should use fallback when file ext is non ascii; contentDisposition(filename) should throw an error when non string options.type is used; contentDisposition(filename) when "filename" is US-ASCII should only include filename parameter; contentDisposition(filename) when "filename" is US-ASCII should escape quotes; contentDisposition edge cases should handle filename with only filename* (no fallback, non-quoted)
- **Nearby killed mutants:** `ConditionalExpression`: expected 'attachment; filename="plans.pdf"; fil…' to be 'attachment; filename...; `ConditionalExpression`: expected 'html; filename="index.ht"' to deeply equal 'html; filename="html"; ...; `LogicalOperator`: expected 'attachment; filename="plans.pdf"; fil…' to be 'attachment; filename...; `EqualityOperator`: expected 'html; filename="index.ht"' to deeply equal 'html; filename="html"; ...; `StringLiteral`: expected 'html; filename="index.ht"' to deeply equal 'html; filename="html"; ...

- **Original (snippet):** `const hasFallback = typeof fallbackName === 'string' && fallbackName !== name`

### Survivor 165 — Line 115
- **ID:** `1221`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 115 (col 7–36)
- **Tests completed:** 18
- **Covered by:** Response extensions res.attachment(filename) should set Content-Disposition with a filename specified; Response extensions res.download(filename) should set Content-Disposition based on path; Response extensions res.download(filename) should set Content-Disposition based on filename; Response extensions res.download(filename) should pass the error to a callback; Response extensions res.download(filename) should set "root" from options; Response extensions res.download(filename) 'should pass options to sendFile's ReadStream'; Response extensions res.download(filename) should set headers from options; Response extensions res.download(filename) should ignore Content-Disposition header in options (case-insensitive); Response extensions res.download(filename) should work without a callback; contentDisposition(filename) should create a header with file name; contentDisposition(filename) should use the basename of the string; contentDisposition(filename) should use hasfallback; contentDisposition(filename) should use pencode fn; contentDisposition(filename) should use fallback when file ext is non ascii; contentDisposition(filename) should throw an error when non string options.type is used; contentDisposition(filename) when "filename" is US-ASCII should only include filename parameter; contentDisposition(filename) when "filename" is US-ASCII should escape quotes; contentDisposition edge cases should handle filename with only filename* (no fallback, non-quoted)
- **Nearby killed mutants:** `ConditionalExpression`: expected 'attachment' to be 'attachment; filename="plans.pdf"' // Object.is e...; `LogicalOperator`: expected 'attachment' to be 'attachment; filename="plans.pdf"' // Object.is e...; `BlockStatement`: expected 'attachment' to be 'attachment; filename="plans.pdf"' // Object.is e...

- **Original (snippet):** `if (isQuotedString || hasFallback) {`

### Survivor 166 — Line 160
- **ID:** `1244`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `default:`
- **Location:** Line 160 (col 5–67)
- **Tests completed:** 1
- **Covered by:** parse(string) with extended parameters should reject unsupported charset

- **Original (snippet):** `default:
      throw new TypeError('unsupported charset in extended field')`

### Survivor 167 — Line 181
- **ID:** `1252`
- **Mutator:** `ArrayDeclaration`
- **Replacement:** `["Stryker was here"]`
- **Location:** Line 181 (col 27–29)
- **Tests completed:** 74
- **Covered by:** contentDisposition(filename) should work when file name is empty; parse(string) with type should throw on trailing semi; parse(string) with type should parse "attachment"; parse(string) with type should parse "inline"; parse(string) with type should parse "form-data"; parse(string) with type should parse with trailing LWS; parse(string) with type should normalize to lower-case; parse(string) with parameters should throw on trailing semi; parse(string) with parameters should throw on invalid param name; parse(string) with parameters should throw on missing param value; parse(string) with parameters should reject invalid parameter value; parse(string) with parameters should reject invalid parameters; parse(string) with parameters should reject duplicate parameters; parse(string) with parameters should lower-case parameter name; parse(string) with parameters should parse quoted parameter value; parse(string) with parameters should parse & unescape quoted value; parse(string) with parameters should include all parameters; parse(string) with parameters should parse parameters separated with any LWS; parse(string) with parameters should parse token filename; parse(string) with parameters should parse ISO-8859-1 filename; parse(string) with parameters should throw error if decodedURI throws an error; parse(string) with extended parameters should reject quoted extended parameter value; parse(string) with extended parameters should parse UTF-8 extended parameter value; parse(string) with extended parameters should parse ISO-8859-1 extended parameter value; parse(string) with extended parameters should not be case-sensitive for charser; parse(string) with extended parameters should reject unsupported charset; parse(string) with extended parameters should reject invalid UTF-8 encoding; parse(string) with extended parameters should parse with embedded language; parse(string) with extended parameters should prefer extended parameter value; parse(string) from TC 2231 Disposition-Type Inline should parse "inline"; parse(string) from TC 2231 Disposition-Type Inline should parse "inline; filename="foo.html""; parse(string) from TC 2231 Disposition-Type Inline should parse "inline; filename="Not an attachment!""; parse(string) from TC 2231 Disposition-Type Inline should parse "inline; filename="foo.pdf""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment"; parse(string) from TC 2231 Disposition-Type Attachment should parse "ATTACHMENT"; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="foo.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="0000000000111111111122222""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="00000000001111111111222222222233333""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="f\oo.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="\"quoting\" tested.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="Here's a semicolon;.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; foo="bar"; filename="foo.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; foo="\"\\";filename="foo.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; FILENAME="foo.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename=foo.html"; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo,bar.html"; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo.html ;"; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; ;filename=foo"; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo bar.html"; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename='foo.bar'; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="foo-ä.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="foo-Ã¤.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="foo-%41.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="50%.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="foo-%\41.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; name="foo-%41.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="ä-%41.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="foo-%c3%a4-%e2%82%ac.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename ="foo.html""; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename="foo.html"; filename="bar.html"; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo[1](2).html"; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo-ä.html"; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo-Ã¤.html"; parse(string) from TC 2231 Disposition-Type Attachment should reject "inline; attachment; filename=foo.html; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; inline; filename=foo.html; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename="foo.html".txt; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename="bar; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo"bar;baz"qux; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo.html, attachment; filename=bar.html; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; foo=foo filename=bar; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=bar foo=foo; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; xfilename=foo.html"; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="/foo.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="\\foo.html""

- **Original (snippet):** `const names: string[] = []`

### Survivor 168 — Line 206
- **ID:** `1284`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 206 (col 11–17)
- **Tests completed:** 9
- **Covered by:** parse(string) with parameters should throw error if decodedURI throws an error; parse(string) with extended parameters should reject quoted extended parameter value; parse(string) with extended parameters should parse UTF-8 extended parameter value; parse(string) with extended parameters should parse ISO-8859-1 extended parameter value; parse(string) with extended parameters should not be case-sensitive for charser; parse(string) with extended parameters should reject unsupported charset; parse(string) with extended parameters should reject invalid UTF-8 encoding; parse(string) with extended parameters should parse with embedded language; parse(string) with extended parameters should prefer extended parameter value
- **Nearby killed mutants:** `BooleanLiteral`: expected number of assertions to be 1, but got 0; `ConditionalExpression`: expected number of assertions to be 1, but got 0

- **Original (snippet):** `if (!value) {`

### Survivor 169 — Line 226
- **ID:** `1302`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 226 (col 7–19)
- **Tests completed:** 63
- **Covered by:** contentDisposition(filename) should work when file name is empty; parse(string) with type should throw on trailing semi; parse(string) with type should parse "attachment"; parse(string) with type should parse "inline"; parse(string) with type should parse "form-data"; parse(string) with type should parse with trailing LWS; parse(string) with type should normalize to lower-case; parse(string) with parameters should throw on trailing semi; parse(string) with parameters should throw on invalid param name; parse(string) with parameters should throw on missing param value; parse(string) with parameters should reject invalid parameter value; parse(string) with parameters should lower-case parameter name; parse(string) with parameters should parse quoted parameter value; parse(string) with parameters should parse & unescape quoted value; parse(string) with parameters should include all parameters; parse(string) with parameters should parse parameters separated with any LWS; parse(string) with parameters should parse token filename; parse(string) with parameters should parse ISO-8859-1 filename; parse(string) with extended parameters should parse UTF-8 extended parameter value; parse(string) with extended parameters should parse ISO-8859-1 extended parameter value; parse(string) with extended parameters should not be case-sensitive for charser; parse(string) with extended parameters should parse with embedded language; parse(string) with extended parameters should prefer extended parameter value; parse(string) from TC 2231 Disposition-Type Inline should parse "inline"; parse(string) from TC 2231 Disposition-Type Inline should parse "inline; filename="foo.html""; parse(string) from TC 2231 Disposition-Type Inline should parse "inline; filename="Not an attachment!""; parse(string) from TC 2231 Disposition-Type Inline should parse "inline; filename="foo.pdf""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment"; parse(string) from TC 2231 Disposition-Type Attachment should parse "ATTACHMENT"; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="foo.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="0000000000111111111122222""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="00000000001111111111222222222233333""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="f\oo.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="\"quoting\" tested.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="Here's a semicolon;.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; foo="bar"; filename="foo.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; foo="\"\\";filename="foo.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; FILENAME="foo.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename=foo.html"; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo,bar.html"; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo.html ;"; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo bar.html"; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename='foo.bar'; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="foo-ä.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="foo-Ã¤.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="foo-%41.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="50%.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="foo-%\41.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; name="foo-%41.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="ä-%41.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="foo-%c3%a4-%e2%82%ac.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename ="foo.html""; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo[1](2).html"; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo-ä.html"; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo-Ã¤.html"; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename="foo.html".txt; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename="bar; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo"bar;baz"qux; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; foo=foo filename=bar; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=bar foo=foo; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; xfilename=foo.html"; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="/foo.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="\\foo.html""
- **Nearby killed mutants:** `ConditionalExpression`: invalid parameter format; `ConditionalExpression`: expected [Function bound parse] to throw an error; `LogicalOperator`: invalid parameter format; `EqualityOperator`: expected [Function bound parse] to throw an error; `ConditionalExpression`: invalid parameter format

- **Original (snippet):** `if (index !== -1 && index !== header.length) {`

### Survivor 170 — Line 226
- **ID:** `1304`
- **Mutator:** `UnaryOperator`
- **Replacement:** `+1`
- **Location:** Line 226 (col 17–19)
- **Tests completed:** 63
- **Covered by:** contentDisposition(filename) should work when file name is empty; parse(string) with type should throw on trailing semi; parse(string) with type should parse "attachment"; parse(string) with type should parse "inline"; parse(string) with type should parse "form-data"; parse(string) with type should parse with trailing LWS; parse(string) with type should normalize to lower-case; parse(string) with parameters should throw on trailing semi; parse(string) with parameters should throw on invalid param name; parse(string) with parameters should throw on missing param value; parse(string) with parameters should reject invalid parameter value; parse(string) with parameters should lower-case parameter name; parse(string) with parameters should parse quoted parameter value; parse(string) with parameters should parse & unescape quoted value; parse(string) with parameters should include all parameters; parse(string) with parameters should parse parameters separated with any LWS; parse(string) with parameters should parse token filename; parse(string) with parameters should parse ISO-8859-1 filename; parse(string) with extended parameters should parse UTF-8 extended parameter value; parse(string) with extended parameters should parse ISO-8859-1 extended parameter value; parse(string) with extended parameters should not be case-sensitive for charser; parse(string) with extended parameters should parse with embedded language; parse(string) with extended parameters should prefer extended parameter value; parse(string) from TC 2231 Disposition-Type Inline should parse "inline"; parse(string) from TC 2231 Disposition-Type Inline should parse "inline; filename="foo.html""; parse(string) from TC 2231 Disposition-Type Inline should parse "inline; filename="Not an attachment!""; parse(string) from TC 2231 Disposition-Type Inline should parse "inline; filename="foo.pdf""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment"; parse(string) from TC 2231 Disposition-Type Attachment should parse "ATTACHMENT"; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="foo.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="0000000000111111111122222""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="00000000001111111111222222222233333""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="f\oo.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="\"quoting\" tested.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="Here's a semicolon;.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; foo="bar"; filename="foo.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; foo="\"\\";filename="foo.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; FILENAME="foo.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename=foo.html"; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo,bar.html"; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo.html ;"; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo bar.html"; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename='foo.bar'; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="foo-ä.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="foo-Ã¤.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="foo-%41.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="50%.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="foo-%\41.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; name="foo-%41.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="ä-%41.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="foo-%c3%a4-%e2%82%ac.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename ="foo.html""; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo[1](2).html"; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo-ä.html"; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo-Ã¤.html"; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename="foo.html".txt; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename="bar; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=foo"bar;baz"qux; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; foo=foo filename=bar; parse(string) from TC 2231 Disposition-Type Attachment should reject "attachment; filename=bar foo=foo; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; xfilename=foo.html"; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="/foo.html""; parse(string) from TC 2231 Disposition-Type Attachment should parse "attachment; filename="\\foo.html""
- **Nearby killed mutants:** `ConditionalExpression`: invalid parameter format; `ConditionalExpression`: expected [Function bound parse] to throw an error; `LogicalOperator`: invalid parameter format; `EqualityOperator`: expected [Function bound parse] to throw an error; `ConditionalExpression`: invalid parameter format

- **Original (snippet):** `if (index !== -1 && index !== header.length) {`

## File: `packages/cookie/src/index.ts`

### Survivor 171 — Line 44
- **ID:** `1323`
- **Mutator:** `EqualityOperator`
- **Replacement:** `eqIdx <= 0`
- **Location:** Line 44 (col 9–18)
- **Tests completed:** 8
- **Covered by:** Cookie parsing should parse basic cookies; Cookie parsing should ignore spaces; Cookie parsing should properly do escaping; Cookie parsing should ignore escaping error and return original value; Cookie parsing should ignore non values; Cookie parsing should assign only once; Cookie parsing should decode with a custom decoder; Cookie serializing should parse serialized cookies
- **Nearby killed mutants:** `ConditionalExpression`: expected {} to strictly equal { foo: 'bar' }; `ConditionalExpression`: expected { foo: 'bar', '': '' } to strictly equal { foo: 'bar' }; `EqualityOperator`: expected {} to strictly equal { foo: 'bar' }

- **Original (snippet):** `if (eqIdx < 0) continue`

### Survivor 172 — Line 82
- **ID:** `1357`
- **Mutator:** `ArithmeticOperator`
- **Replacement:** `opt.maxAge + 0`
- **Location:** Line 82 (col 20–34)
- **Tests completed:** 3
- **Covered by:** Response extensions res.cookie(name, value, options) should set "maxAge" and "expires" from options; Cookie serializing should put valid "maxAge" in cookie; Cookie serializing should throw on infinite "maxAge" parameter

- **Original (snippet):** `const maxAge = opt.maxAge - 0`

### Survivor 173 — Line 92
- **ID:** `1371`
- **Mutator:** `StringLiteral`
- **Replacement:** ````
- **Location:** Line 92 (col 12–36)
- **Tests completed:** 1
- **Covered by:** Cookie serializing should serialize a string correctly

- **Original (snippet):** `str += `; Domain=${opt.domain}``

## File: `packages/cookie-signature/src/index.ts`

### Survivor 174 — Line 7
- **ID:** `1413`
- **Mutator:** `Regex`
- **Replacement:** `/=+/`
- **Location:** Line 7 (col 79–84)
- **Tests completed:** 3
- **Covered by:** Response extensions res.cookie(name, value, options) should sign cookie when signed option is true and secret is provided; .sign(val, secret) should sign the cookie; .unsign(val, secret) should unsign the cookie
- **Nearby killed mutants:** `StringLiteral`: expected '' to be 'hello.DGDUkGlIkCzPz+C0B064FNgHdEjox7c…' // Object.is equality; `StringLiteral`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `StringLiteral`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `StringLiteral`: expected 'hello.DGDUkGlIkCzPz+C0B064FNgHdEjox7c…' to be 'hello.DGDUkGlIkCzPz+...

- **Original (snippet):** ``${val}.${createHmac('sha256', secret).update(val).digest('base64').replace(/=+$/, '')}``

### Survivor 175 — Line 7
- **ID:** `1414`
- **Mutator:** `Regex`
- **Replacement:** `/=$/`
- **Location:** Line 7 (col 79–84)
- **Tests completed:** 3
- **Covered by:** Response extensions res.cookie(name, value, options) should sign cookie when signed option is true and secret is provided; .sign(val, secret) should sign the cookie; .unsign(val, secret) should unsign the cookie
- **Nearby killed mutants:** `StringLiteral`: expected '' to be 'hello.DGDUkGlIkCzPz+C0B064FNgHdEjox7c…' // Object.is equality; `StringLiteral`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `StringLiteral`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `StringLiteral`: expected 'hello.DGDUkGlIkCzPz+C0B064FNgHdEjox7c…' to be 'hello.DGDUkGlIkCzPz+...

- **Original (snippet):** ``${val}.${createHmac('sha256', secret).update(val).digest('base64').replace(/=+$/, '')}``

## File: `packages/dotenv/src/index.ts`

### Survivor 176 — Line 34
- **ID:** `1448`
- **Mutator:** `StringLiteral`
- **Replacement:** `"Stryker was here!"`
- **Location:** Line 34 (col 37–39)
- **Tests completed:** 4
- **Covered by:** Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: val.trim is not a function; `ConditionalExpression`: val.trim is not a function; `LogicalOperator`: expected '' to be 'true' // Object.is equality

- **Original (snippet):** `let val = keyValueArr[2] || ''`

### Survivor 177 — Line 35
- **ID:** `1449`
- **Mutator:** `ArithmeticOperator`
- **Replacement:** `val.length + 1`
- **Location:** Line 35 (col 21–35)
- **Tests completed:** 8
- **Covered by:** Dotenv parsing should parse a buffer into an object; Dotenv parsing can parse (\r) line endings; Dotenv parsing can parse (\n) line endings; Dotenv parsing can parse (\r\n) line endings; Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value

- **Original (snippet):** `const end = val.length - 1`

### Survivor 178 — Line 36
- **ID:** `1451`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 36 (col 32–66)
- **Tests completed:** 8
- **Covered by:** Dotenv parsing should parse a buffer into an object; Dotenv parsing can parse (\r) line endings; Dotenv parsing can parse (\n) line endings; Dotenv parsing can parse (\r\n) line endings; Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected 'ru' to be 'true' // Object.is equality

- **Original (snippet):** `const isDoubleQuoted = val[0] === '"' && val[end] === '"'`

### Survivor 179 — Line 36
- **ID:** `1452`
- **Mutator:** `LogicalOperator`
- **Replacement:** `val[0] === '"' || val[end] === '"'`
- **Location:** Line 36 (col 32–66)
- **Tests completed:** 8
- **Covered by:** Dotenv parsing should parse a buffer into an object; Dotenv parsing can parse (\r) line endings; Dotenv parsing can parse (\n) line endings; Dotenv parsing can parse (\r\n) line endings; Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected 'ru' to be 'true' // Object.is equality

- **Original (snippet):** `const isDoubleQuoted = val[0] === '"' && val[end] === '"'`

### Survivor 180 — Line 36
- **ID:** `1453`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 36 (col 32–46)
- **Tests completed:** 8
- **Covered by:** Dotenv parsing should parse a buffer into an object; Dotenv parsing can parse (\r) line endings; Dotenv parsing can parse (\n) line endings; Dotenv parsing can parse (\r\n) line endings; Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected 'ru' to be 'true' // Object.is equality

- **Original (snippet):** `const isDoubleQuoted = val[0] === '"' && val[end] === '"'`

### Survivor 181 — Line 36
- **ID:** `1454`
- **Mutator:** `EqualityOperator`
- **Replacement:** `val[0] !== '"'`
- **Location:** Line 36 (col 32–46)
- **Tests completed:** 8
- **Covered by:** Dotenv parsing should parse a buffer into an object; Dotenv parsing can parse (\r) line endings; Dotenv parsing can parse (\n) line endings; Dotenv parsing can parse (\r\n) line endings; Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected 'ru' to be 'true' // Object.is equality

- **Original (snippet):** `const isDoubleQuoted = val[0] === '"' && val[end] === '"'`

### Survivor 182 — Line 36
- **ID:** `1455`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 36 (col 43–46)
- **Tests completed:** 8
- **Covered by:** Dotenv parsing should parse a buffer into an object; Dotenv parsing can parse (\r) line endings; Dotenv parsing can parse (\n) line endings; Dotenv parsing can parse (\r\n) line endings; Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected 'ru' to be 'true' // Object.is equality

- **Original (snippet):** `const isDoubleQuoted = val[0] === '"' && val[end] === '"'`

### Survivor 183 — Line 36
- **ID:** `1456`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 36 (col 50–66)
- **Tests completed:** 4
- **Covered by:** Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected 'ru' to be 'true' // Object.is equality

- **Original (snippet):** `const isDoubleQuoted = val[0] === '"' && val[end] === '"'`

### Survivor 184 — Line 36
- **ID:** `1457`
- **Mutator:** `EqualityOperator`
- **Replacement:** `val[end] !== '"'`
- **Location:** Line 36 (col 50–66)
- **Tests completed:** 4
- **Covered by:** Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected 'ru' to be 'true' // Object.is equality

- **Original (snippet):** `const isDoubleQuoted = val[0] === '"' && val[end] === '"'`

### Survivor 185 — Line 36
- **ID:** `1458`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 36 (col 63–66)
- **Tests completed:** 4
- **Covered by:** Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected 'ru' to be 'true' // Object.is equality

- **Original (snippet):** `const isDoubleQuoted = val[0] === '"' && val[end] === '"'`

### Survivor 186 — Line 37
- **ID:** `1460`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 37 (col 32–66)
- **Tests completed:** 8
- **Covered by:** Dotenv parsing should parse a buffer into an object; Dotenv parsing can parse (\r) line endings; Dotenv parsing can parse (\n) line endings; Dotenv parsing can parse (\r\n) line endings; Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected 'ru' to be 'true' // Object.is equality

- **Original (snippet):** `const isSingleQuoted = val[0] === "'" && val[end] === "'"`

### Survivor 187 — Line 37
- **ID:** `1461`
- **Mutator:** `LogicalOperator`
- **Replacement:** `val[0] === "'" || val[end] === "'"`
- **Location:** Line 37 (col 32–66)
- **Tests completed:** 8
- **Covered by:** Dotenv parsing should parse a buffer into an object; Dotenv parsing can parse (\r) line endings; Dotenv parsing can parse (\n) line endings; Dotenv parsing can parse (\r\n) line endings; Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected 'ru' to be 'true' // Object.is equality

- **Original (snippet):** `const isSingleQuoted = val[0] === "'" && val[end] === "'"`

### Survivor 188 — Line 37
- **ID:** `1462`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 37 (col 32–46)
- **Tests completed:** 8
- **Covered by:** Dotenv parsing should parse a buffer into an object; Dotenv parsing can parse (\r) line endings; Dotenv parsing can parse (\n) line endings; Dotenv parsing can parse (\r\n) line endings; Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected 'ru' to be 'true' // Object.is equality

- **Original (snippet):** `const isSingleQuoted = val[0] === "'" && val[end] === "'"`

### Survivor 189 — Line 37
- **ID:** `1463`
- **Mutator:** `EqualityOperator`
- **Replacement:** `val[0] !== "'"`
- **Location:** Line 37 (col 32–46)
- **Tests completed:** 8
- **Covered by:** Dotenv parsing should parse a buffer into an object; Dotenv parsing can parse (\r) line endings; Dotenv parsing can parse (\n) line endings; Dotenv parsing can parse (\r\n) line endings; Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected 'ru' to be 'true' // Object.is equality

- **Original (snippet):** `const isSingleQuoted = val[0] === "'" && val[end] === "'"`

### Survivor 190 — Line 37
- **ID:** `1464`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 37 (col 43–46)
- **Tests completed:** 8
- **Covered by:** Dotenv parsing should parse a buffer into an object; Dotenv parsing can parse (\r) line endings; Dotenv parsing can parse (\n) line endings; Dotenv parsing can parse (\r\n) line endings; Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected 'ru' to be 'true' // Object.is equality

- **Original (snippet):** `const isSingleQuoted = val[0] === "'" && val[end] === "'"`

### Survivor 191 — Line 37
- **ID:** `1465`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 37 (col 50–66)
- **Tests completed:** 4
- **Covered by:** Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected 'ru' to be 'true' // Object.is equality

- **Original (snippet):** `const isSingleQuoted = val[0] === "'" && val[end] === "'"`

### Survivor 192 — Line 37
- **ID:** `1466`
- **Mutator:** `EqualityOperator`
- **Replacement:** `val[end] !== "'"`
- **Location:** Line 37 (col 50–66)
- **Tests completed:** 4
- **Covered by:** Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected 'ru' to be 'true' // Object.is equality

- **Original (snippet):** `const isSingleQuoted = val[0] === "'" && val[end] === "'"`

### Survivor 193 — Line 37
- **ID:** `1467`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 37 (col 63–66)
- **Tests completed:** 4
- **Covered by:** Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected 'ru' to be 'true' // Object.is equality

- **Original (snippet):** `const isSingleQuoted = val[0] === "'" && val[end] === "'"`

### Survivor 194 — Line 40
- **ID:** `1469`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 40 (col 13–45)
- **Tests completed:** 8
- **Covered by:** Dotenv parsing should parse a buffer into an object; Dotenv parsing can parse (\r) line endings; Dotenv parsing can parse (\n) line endings; Dotenv parsing can parse (\r\n) line endings; Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected 'ru' to be 'true' // Object.is equality

- **Original (snippet):** `if (isSingleQuoted || isDoubleQuoted) {`

### Survivor 195 — Line 40
- **ID:** `1470`
- **Mutator:** `LogicalOperator`
- **Replacement:** `isSingleQuoted && isDoubleQuoted`
- **Location:** Line 40 (col 13–45)
- **Tests completed:** 8
- **Covered by:** Dotenv parsing should parse a buffer into an object; Dotenv parsing can parse (\r) line endings; Dotenv parsing can parse (\n) line endings; Dotenv parsing can parse (\r\n) line endings; Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected 'ru' to be 'true' // Object.is equality

- **Original (snippet):** `if (isSingleQuoted || isDoubleQuoted) {`

### Survivor 196 — Line 40
- **ID:** `1471`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 40 (col 47–10)
- **Tests completed:** 4
- **Covered by:** Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected 'ru' to be 'true' // Object.is equality

- **Original (snippet):** `if (isSingleQuoted || isDoubleQuoted) {
          val = val.substring(1, end)

          // if double quoted, expand newlines
          if (isDoubleQuoted) {
            val = val.replace(RE_NEWLINES, NEWLINE)
          }
        } else {`

### Survivor 197 — Line 41
- **ID:** `1472`
- **Mutator:** `MethodExpression`
- **Replacement:** `val`
- **Location:** Line 41 (col 17–38)
- **Tests completed:** 4
- **Covered by:** Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value

- **Original (snippet):** `val = val.substring(1, end)`

### Survivor 198 — Line 44
- **ID:** `1473`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 44 (col 15–29)
- **Tests completed:** 4
- **Covered by:** Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value

- **Original (snippet):** `if (isDoubleQuoted) {`

### Survivor 199 — Line 44
- **ID:** `1474`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 44 (col 15–29)
- **Tests completed:** 4
- **Covered by:** Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value

- **Original (snippet):** `if (isDoubleQuoted) {`

### Survivor 200 — Line 44
- **ID:** `1475`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 44 (col 31–12)
- **Tests completed:** 4
- **Covered by:** Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value

- **Original (snippet):** `if (isDoubleQuoted) {
            val = val.replace(RE_NEWLINES, NEWLINE)
          }`

### Survivor 201 — Line 47
- **ID:** `1476`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 47 (col 16–10)
- **Tests completed:** 8
- **Covered by:** Dotenv parsing should parse a buffer into an object; Dotenv parsing can parse (\r) line endings; Dotenv parsing can parse (\n) line endings; Dotenv parsing can parse (\r\n) line endings; Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value

- **Original (snippet):** `} else {
          // remove surrounding whitespace
          val = val.trim()
        }`

### Survivor 202 — Line 49
- **ID:** `1477`
- **Mutator:** `MethodExpression`
- **Replacement:** `val`
- **Location:** Line 49 (col 17–27)
- **Tests completed:** 8
- **Covered by:** Dotenv parsing should parse a buffer into an object; Dotenv parsing can parse (\r) line endings; Dotenv parsing can parse (\n) line endings; Dotenv parsing can parse (\r\n) line endings; Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value

- **Original (snippet):** `val = val.trim()`

### Survivor 203 — Line 53
- **ID:** `1478`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 53 (col 18–23)
- **Tests completed:** 8
- **Covered by:** Dotenv parsing can parse (\r) line endings; Dotenv parsing can parse (\n) line endings; Dotenv parsing can parse (\r\n) line endings; Dotenv parsing debug works; Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value

- **Original (snippet):** `} else if (debug) {`

### Survivor 204 — Line 53
- **ID:** `1479`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 53 (col 18–23)
- **Tests completed:** 8
- **Covered by:** Dotenv parsing can parse (\r) line endings; Dotenv parsing can parse (\n) line endings; Dotenv parsing can parse (\r\n) line endings; Dotenv parsing debug works; Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value

- **Original (snippet):** `} else if (debug) {`

### Survivor 205 — Line 53
- **ID:** `1480`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 53 (col 25–8)
- **Tests completed:** 2
- **Covered by:** Dotenv parsing debug works; Dotenv config does not write over keys already in process.env if the key has a falsy value

- **Original (snippet):** `} else if (debug) {
        log(`did not match key and value when parsing line ${idx + 1}: ${line}`)
      }`

### Survivor 206 — Line 70
- **ID:** `1487`
- **Mutator:** `OptionalChaining`
- **Replacement:** `options.path`
- **Location:** Line 70 (col 22–35)
- **Tests completed:** 5
- **Covered by:** Dotenv config options takes path as option; Dotenv config options takes encoding as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected undefined to be 'basic' // Object.is equality; `ConditionalExpression`: expected undefined to be 'basic' // Object.is equality; `LogicalOperator`: expected undefined to be 'basic' // Object.is equality

- **Original (snippet):** `const dotenvPath = options?.path || path.resolve(process.cwd(), '.env')`

### Survivor 207 — Line 70
- **ID:** `1488`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 70 (col 67–73)
- **Tests completed:** 1
- **Covered by:** Dotenv config options takes encoding as option
- **Nearby killed mutants:** `ConditionalExpression`: expected undefined to be 'basic' // Object.is equality; `ConditionalExpression`: expected undefined to be 'basic' // Object.is equality; `LogicalOperator`: expected undefined to be 'basic' // Object.is equality

- **Original (snippet):** `const dotenvPath = options?.path || path.resolve(process.cwd(), '.env')`

### Survivor 208 — Line 71
- **ID:** `1490`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 71 (col 20–47)
- **Tests completed:** 5
- **Covered by:** Dotenv config options takes path as option; Dotenv config options takes encoding as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected undefined to be 'basic' // Object.is equality

- **Original (snippet):** `const encoding = options?.encoding || 'utf8'`

### Survivor 209 — Line 71
- **ID:** `1491`
- **Mutator:** `LogicalOperator`
- **Replacement:** `options?.encoding && 'utf8'`
- **Location:** Line 71 (col 20–47)
- **Tests completed:** 5
- **Covered by:** Dotenv config options takes path as option; Dotenv config options takes encoding as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected undefined to be 'basic' // Object.is equality

- **Original (snippet):** `const encoding = options?.encoding || 'utf8'`

### Survivor 210 — Line 71
- **ID:** `1492`
- **Mutator:** `OptionalChaining`
- **Replacement:** `options.encoding`
- **Location:** Line 71 (col 20–37)
- **Tests completed:** 5
- **Covered by:** Dotenv config options takes path as option; Dotenv config options takes encoding as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected undefined to be 'basic' // Object.is equality

- **Original (snippet):** `const encoding = options?.encoding || 'utf8'`

### Survivor 211 — Line 71
- **ID:** `1493`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 71 (col 41–47)
- **Tests completed:** 4
- **Covered by:** Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `ConditionalExpression`: expected undefined to be 'basic' // Object.is equality

- **Original (snippet):** `const encoding = options?.encoding || 'utf8'`

### Survivor 212 — Line 72
- **ID:** `1494`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 72 (col 17–40)
- **Tests completed:** 5
- **Covered by:** Dotenv config options takes path as option; Dotenv config options takes encoding as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value

- **Original (snippet):** `const debug = options?.debug || false`

### Survivor 213 — Line 72
- **ID:** `1495`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 72 (col 17–40)
- **Tests completed:** 5
- **Covered by:** Dotenv config options takes path as option; Dotenv config options takes encoding as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value

- **Original (snippet):** `const debug = options?.debug || false`

### Survivor 214 — Line 72
- **ID:** `1496`
- **Mutator:** `LogicalOperator`
- **Replacement:** `options?.debug && false`
- **Location:** Line 72 (col 17–40)
- **Tests completed:** 5
- **Covered by:** Dotenv config options takes path as option; Dotenv config options takes encoding as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value

- **Original (snippet):** `const debug = options?.debug || false`

### Survivor 215 — Line 72
- **ID:** `1497`
- **Mutator:** `OptionalChaining`
- **Replacement:** `options.debug`
- **Location:** Line 72 (col 17–31)
- **Tests completed:** 5
- **Covered by:** Dotenv config options takes path as option; Dotenv config options takes encoding as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value

- **Original (snippet):** `const debug = options?.debug || false`

### Survivor 216 — Line 72
- **ID:** `1498`
- **Mutator:** `BooleanLiteral`
- **Replacement:** `true`
- **Location:** Line 72 (col 35–40)
- **Tests completed:** 5
- **Covered by:** Dotenv config options takes path as option; Dotenv config options takes encoding as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env

- **Original (snippet):** `const debug = options?.debug || false`

### Survivor 217 — Line 76
- **ID:** `1500`
- **Mutator:** `ObjectLiteral`
- **Replacement:** `{}`
- **Location:** Line 76 (col 51–63)
- **Tests completed:** 5
- **Covered by:** Dotenv config options takes path as option; Dotenv config options takes encoding as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value

- **Original (snippet):** `const parsed = parse(readFileSync(dotenvPath, { encoding }), { debug })`

### Survivor 218 — Line 76
- **ID:** `1501`
- **Mutator:** `ObjectLiteral`
- **Replacement:** `{}`
- **Location:** Line 76 (col 66–75)
- **Tests completed:** 4
- **Covered by:** Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value

- **Original (snippet):** `const parsed = parse(readFileSync(dotenvPath, { encoding }), { debug })`

### Survivor 219 — Line 78
- **ID:** `1502`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 78 (col 44–6)
- **Tests completed:** 4
- **Covered by:** Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value

- **Original (snippet):** `for (const key of Object.keys(parsed)) {
      if (!Object.hasOwn(process.env, key)) {
        process.env[key] = parsed[key]
      } else if (debug) {
        log(`"${key}" is already defined in \`process.env\` and will not be overwritten`)
      }
    }`

### Survivor 220 — Line 79
- **ID:** `1505`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 79 (col 11–43)
- **Tests completed:** 4
- **Covered by:** Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `BooleanLiteral`: expected 'foo' to be 'bar' // Object.is equality; `ConditionalExpression`: expected 'foo' to be 'bar' // Object.is equality

- **Original (snippet):** `if (!Object.hasOwn(process.env, key)) {`

### Survivor 221 — Line 79
- **ID:** `1506`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 79 (col 45–8)
- **Tests completed:** 4
- **Covered by:** Dotenv config options takes path as option; Dotenv config reads path with encoding, parsing output to process.env; Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value
- **Nearby killed mutants:** `BooleanLiteral`: expected 'foo' to be 'bar' // Object.is equality; `ConditionalExpression`: expected 'foo' to be 'bar' // Object.is equality

- **Original (snippet):** `if (!Object.hasOwn(process.env, key)) {
        process.env[key] = parsed[key]
      } else if (debug) {`

### Survivor 222 — Line 81
- **ID:** `1507`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 81 (col 18–23)
- **Tests completed:** 2
- **Covered by:** Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value

- **Original (snippet):** `} else if (debug) {`

### Survivor 223 — Line 81
- **ID:** `1508`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 81 (col 18–23)
- **Tests completed:** 2
- **Covered by:** Dotenv config does not write over keys already in process.env; Dotenv config does not write over keys already in process.env if the key has a falsy value

- **Original (snippet):** `} else if (debug) {`

### Survivor 224 — Line 81
- **ID:** `1509`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 81 (col 25–8)
- **Tests completed:** 1
- **Covered by:** Dotenv config does not write over keys already in process.env if the key has a falsy value

- **Original (snippet):** `} else if (debug) {
        log(`"${key}" is already defined in \`process.env\` and will not be overwritten`)
      }`

### Survivor 225 — Line 82
- **ID:** `1510`
- **Mutator:** `StringLiteral`
- **Replacement:** ````
- **Location:** Line 82 (col 13–89)
- **Tests completed:** 1
- **Covered by:** Dotenv config does not write over keys already in process.env if the key has a falsy value

- **Original (snippet):** `log(`"${key}" is already defined in \`process.env\` and will not be overwritten`)`

### Survivor 226 — Line 87
- **ID:** `1512`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 87 (col 19–4)
- **Tests completed:** 1
- **Covered by:** Dotenv config options takes encoding as option

- **Original (snippet):** `} catch (error) {
    return { error: error as Error }
  }`

### Survivor 227 — Line 88
- **ID:** `1513`
- **Mutator:** `ObjectLiteral`
- **Replacement:** `{}`
- **Location:** Line 88 (col 12–37)
- **Tests completed:** 1
- **Covered by:** Dotenv config options takes encoding as option

- **Original (snippet):** `return { error: error as Error }`

## File: `packages/etag/src/index.ts`

### Survivor 228 — Line 8
- **ID:** `1530`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 8 (col 7–26)
- **Tests completed:** 136
- **Covered by:** Testing App should launch a basic server; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; send(body) should send a plain text; send(body) should set HTML content-type header when sending plain text; send(body) should generate an eTag on a plain text response; send(body) should send a JSON response; send(body) should send a buffer; send(body) should preserve Content-Type when sending buffer with Content-Type already set; send(body) should send nothing on a HEAD request; send(body) should remove some headers for 204 status; send(body) should remove some headers for 304 status; send(body) should set Content-Type to application/octet-stream for buffers if the header hasn't been set before; sendStatus(status) should send "I'm a teapot" when argument is 418; sendStatus(status) should send stringified status code for unsupported status codes; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.sendStatus sends status + text; Response methods res.send sets proper headers; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties req.xhr is false because of node-superagent; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF; etag(entity) should generate a strong ETag; etag(entity) should work for empty string; etag(entity) should work containing Unicode; etag(entity) should reject number entities; etag(entity) Buffer should work on empty; etag(entity) Buffer should generate a strong ETag; etag(entity) weak should generate a weak ETag; etag(entity) weak should generate a strong ETag
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have correct header etag"
+ actual - expected

  {
   ...; `EqualityOperator`: Request "GET /" should have correct header etag"
+ actual - expected

  {
   ...

- **Original (snippet):** `if (entity.length === 0) {`

### Survivor 229 — Line 8
- **ID:** `1532`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 8 (col 28–4)
- **Tests completed:** 2
- **Covered by:** etag(entity) should work for empty string; etag(entity) Buffer should work on empty
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have correct header etag"
+ actual - expected

  {
   ...; `EqualityOperator`: Request "GET /" should have correct header etag"
+ actual - expected

  {
   ...

- **Original (snippet):** `if (entity.length === 0) {
    // fast-path empty
    return '"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"'
  }`

### Survivor 230 — Line 14
- **ID:** `1536`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 14 (col 31–37)
- **Tests completed:** 134
- **Covered by:** Testing App should launch a basic server; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; send(body) should send a plain text; send(body) should set HTML content-type header when sending plain text; send(body) should generate an eTag on a plain text response; send(body) should send a JSON response; send(body) should send a buffer; send(body) should preserve Content-Type when sending buffer with Content-Type already set; send(body) should send nothing on a HEAD request; send(body) should remove some headers for 204 status; send(body) should remove some headers for 304 status; send(body) should set Content-Type to application/octet-stream for buffers if the header hasn't been set before; sendStatus(status) should send "I'm a teapot" when argument is 418; sendStatus(status) should send stringified status code for unsupported status codes; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.sendStatus sends status + text; Response methods res.send sets proper headers; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties req.xhr is false because of node-superagent; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF; etag(entity) should generate a strong ETag; etag(entity) should work containing Unicode; etag(entity) should reject number entities; etag(entity) Buffer should generate a strong ETag; etag(entity) weak should generate a weak ETag; etag(entity) weak should generate a strong ETag

- **Original (snippet):** `.update(entity as string, 'utf8')`

### Survivor 231 — Line 18
- **ID:** `1538`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 18 (col 15–41)
- **Tests completed:** 133
- **Covered by:** Testing App should launch a basic server; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; send(body) should send a plain text; send(body) should set HTML content-type header when sending plain text; send(body) should generate an eTag on a plain text response; send(body) should send a JSON response; send(body) should send a buffer; send(body) should preserve Content-Type when sending buffer with Content-Type already set; send(body) should send nothing on a HEAD request; send(body) should remove some headers for 204 status; send(body) should remove some headers for 304 status; send(body) should set Content-Type to application/octet-stream for buffers if the header hasn't been set before; sendStatus(status) should send "I'm a teapot" when argument is 418; sendStatus(status) should send stringified status code for unsupported status codes; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.sendStatus sends status + text; Response methods res.send sets proper headers; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties req.xhr is false because of node-superagent; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF; etag(entity) should generate a strong ETag; etag(entity) should work containing Unicode; etag(entity) Buffer should generate a strong ETag; etag(entity) weak should generate a weak ETag; etag(entity) weak should generate a strong ETag
- **Nearby killed mutants:** `ConditionalExpression`: expected '"1-QkSKq8sXBjHL2tFAZknA2n6LYzM"' to be '"3-QkSKq8sXBjHL2tFAZknA2n6L...; `EqualityOperator`: expected '"1-QkSKq8sXBjHL2tFAZknA2n6LYzM"' to be '"3-QkSKq8sXBjHL2tFAZknA2n6L...; `StringLiteral`: expected '"1-QkSKq8sXBjHL2tFAZknA2n6LYzM"' to be '"3-QkSKq8sXBjHL2tFAZknA2n6L...

- **Original (snippet):** `const len = typeof entity === 'string' ? Buffer.byteLength(entity, 'utf8') : entity.length`

### Survivor 232 — Line 18
- **ID:** `1542`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 18 (col 70–76)
- **Tests completed:** 4
- **Covered by:** etag(entity) should generate a strong ETag; etag(entity) should work containing Unicode; etag(entity) weak should generate a weak ETag; etag(entity) weak should generate a strong ETag
- **Nearby killed mutants:** `ConditionalExpression`: expected '"1-QkSKq8sXBjHL2tFAZknA2n6LYzM"' to be '"3-QkSKq8sXBjHL2tFAZknA2n6L...; `EqualityOperator`: expected '"1-QkSKq8sXBjHL2tFAZknA2n6LYzM"' to be '"3-QkSKq8sXBjHL2tFAZknA2n6L...; `StringLiteral`: expected '"1-QkSKq8sXBjHL2tFAZknA2n6LYzM"' to be '"3-QkSKq8sXBjHL2tFAZknA2n6L...

- **Original (snippet):** `const len = typeof entity === 'string' ? Buffer.byteLength(entity, 'utf8') : entity.length`

### Survivor 233 — Line 30
- **ID:** `1554`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 30 (col 19–65)
- **Tests completed:** 162
- **Covered by:** Testing App should launch a basic server; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; send(body) should send a plain text; send(body) should set HTML content-type header when sending plain text; send(body) should generate an eTag on a plain text response; send(body) should send a JSON response; send(body) should send a buffer; send(body) should preserve Content-Type when sending buffer with Content-Type already set; send(body) should send nothing on a HEAD request; send(body) should remove some headers for 204 status; send(body) should remove some headers for 304 status; send(body) should set Content-Type to application/octet-stream for buffers if the header hasn't been set before; sendStatus(status) should send "I'm a teapot" when argument is 418; sendStatus(status) should send stringified status code for unsupported status codes; sendFile(path) should send the file; sendFile(path) should set the Content-Type header based on the filename; sendFile(path) should inherit the previously set Content-Type header; sendFile(path) should allow custom headers through the options param; sendFile(path) should support Range header; sendFile(path) should send 419 if out of range; sendFile(path) should set default encoding to UTF-8; sendFile(path) should inherit the previously set status code; sendFile(path) should default to status 200 when statusCode is falsy; sendFile(path) should enable cache headers; sendFile(path) should mark cache is "must-revalidate" if maxAge is 0; sendFile(path) should set cache control with maxAge=0 and immutable=false; sendFile(path) should handle Range header with only start position; sendFile(path) should set cache header with just maxAge when not immutable and not 0; sendFile(path) should not set Cache-Control header when no caching options provided; sendFile(path) should not set Cache-Control header when caching is empty object; sendFile(path) should call callback on successful stream completion; Response extensions res.download(filename) should set Content-Disposition based on path; Response extensions res.download(filename) should set Content-Disposition based on filename; Response extensions res.download(filename) should pass the error to a callback; Response extensions res.download(filename) should set "root" from options; Response extensions res.download(filename) 'should pass options to sendFile's ReadStream'; Response extensions res.download(filename) should set headers from options; Response extensions res.download(filename) should ignore Content-Disposition header in options (case-insensitive); Response extensions res.download(filename) should work without a callback; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.sendStatus sends status + text; Response methods res.send sets proper headers; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties req.xhr is false because of node-superagent; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF; etag(entity) should generate a strong ETag; etag(entity) should work for empty string; etag(entity) should work containing Unicode; etag(entity) should reject number entities; etag(entity) Buffer should work on empty; etag(entity) Buffer should generate a strong ETag; etag(entity) fs.Stats should generate a weak ETag; etag(entity) weak should generate a weak ETag; etag(entity) weak should generate a strong ETag
- **Nearby killed mutants:** `ConditionalExpression`: Cannot read properties of undefined (reading 'getTime'); `ConditionalExpression`: The "data" argument must be of type string or an instance of Buffer, TypedArr...; `LogicalOperator`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `EqualityOperator`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `ConditionalExpression`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...

- **Original (snippet):** `const isStats = typeof (entity as Stats).mtime !== 'undefined' && typeof (entity as Stats).size !== 'undefined'`

### Survivor 234 — Line 30
- **ID:** `1556`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 30 (col 54–65)
- **Tests completed:** 162
- **Covered by:** Testing App should launch a basic server; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; send(body) should send a plain text; send(body) should set HTML content-type header when sending plain text; send(body) should generate an eTag on a plain text response; send(body) should send a JSON response; send(body) should send a buffer; send(body) should preserve Content-Type when sending buffer with Content-Type already set; send(body) should send nothing on a HEAD request; send(body) should remove some headers for 204 status; send(body) should remove some headers for 304 status; send(body) should set Content-Type to application/octet-stream for buffers if the header hasn't been set before; sendStatus(status) should send "I'm a teapot" when argument is 418; sendStatus(status) should send stringified status code for unsupported status codes; sendFile(path) should send the file; sendFile(path) should set the Content-Type header based on the filename; sendFile(path) should inherit the previously set Content-Type header; sendFile(path) should allow custom headers through the options param; sendFile(path) should support Range header; sendFile(path) should send 419 if out of range; sendFile(path) should set default encoding to UTF-8; sendFile(path) should inherit the previously set status code; sendFile(path) should default to status 200 when statusCode is falsy; sendFile(path) should enable cache headers; sendFile(path) should mark cache is "must-revalidate" if maxAge is 0; sendFile(path) should set cache control with maxAge=0 and immutable=false; sendFile(path) should handle Range header with only start position; sendFile(path) should set cache header with just maxAge when not immutable and not 0; sendFile(path) should not set Cache-Control header when no caching options provided; sendFile(path) should not set Cache-Control header when caching is empty object; sendFile(path) should call callback on successful stream completion; Response extensions res.download(filename) should set Content-Disposition based on path; Response extensions res.download(filename) should set Content-Disposition based on filename; Response extensions res.download(filename) should pass the error to a callback; Response extensions res.download(filename) should set "root" from options; Response extensions res.download(filename) 'should pass options to sendFile's ReadStream'; Response extensions res.download(filename) should set headers from options; Response extensions res.download(filename) should ignore Content-Disposition header in options (case-insensitive); Response extensions res.download(filename) should work without a callback; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.sendStatus sends status + text; Response methods res.send sets proper headers; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties req.xhr is false because of node-superagent; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF; etag(entity) should generate a strong ETag; etag(entity) should work for empty string; etag(entity) should work containing Unicode; etag(entity) should reject number entities; etag(entity) Buffer should work on empty; etag(entity) Buffer should generate a strong ETag; etag(entity) fs.Stats should generate a weak ETag; etag(entity) weak should generate a weak ETag; etag(entity) weak should generate a strong ETag
- **Nearby killed mutants:** `ConditionalExpression`: Cannot read properties of undefined (reading 'getTime'); `ConditionalExpression`: The "data" argument must be of type string or an instance of Buffer, TypedArr...; `LogicalOperator`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `EqualityOperator`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `ConditionalExpression`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...

- **Original (snippet):** `const isStats = typeof (entity as Stats).mtime !== 'undefined' && typeof (entity as Stats).size !== 'undefined'`

### Survivor 235 — Line 30
- **ID:** `1559`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 30 (col 103–114)
- **Tests completed:** 26
- **Covered by:** sendFile(path) should send the file; sendFile(path) should set the Content-Type header based on the filename; sendFile(path) should inherit the previously set Content-Type header; sendFile(path) should allow custom headers through the options param; sendFile(path) should support Range header; sendFile(path) should send 419 if out of range; sendFile(path) should set default encoding to UTF-8; sendFile(path) should inherit the previously set status code; sendFile(path) should default to status 200 when statusCode is falsy; sendFile(path) should enable cache headers; sendFile(path) should mark cache is "must-revalidate" if maxAge is 0; sendFile(path) should set cache control with maxAge=0 and immutable=false; sendFile(path) should handle Range header with only start position; sendFile(path) should set cache header with just maxAge when not immutable and not 0; sendFile(path) should not set Cache-Control header when no caching options provided; sendFile(path) should not set Cache-Control header when caching is empty object; sendFile(path) should call callback on successful stream completion; Response extensions res.download(filename) should set Content-Disposition based on path; Response extensions res.download(filename) should set Content-Disposition based on filename; Response extensions res.download(filename) should pass the error to a callback; Response extensions res.download(filename) should set "root" from options; Response extensions res.download(filename) 'should pass options to sendFile's ReadStream'; Response extensions res.download(filename) should set headers from options; Response extensions res.download(filename) should ignore Content-Disposition header in options (case-insensitive); Response extensions res.download(filename) should work without a callback; etag(entity) fs.Stats should generate a weak ETag
- **Nearby killed mutants:** `ConditionalExpression`: Cannot read properties of undefined (reading 'getTime'); `ConditionalExpression`: The "data" argument must be of type string or an instance of Buffer, TypedArr...; `LogicalOperator`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `EqualityOperator`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `ConditionalExpression`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...

- **Original (snippet):** `const isStats = typeof (entity as Stats).mtime !== 'undefined' && typeof (entity as Stats).size !== 'undefined'`

## File: `packages/forwarded/src/index.ts`

### Survivor 236 — Line 24
- **ID:** `1573`
- **Mutator:** `ArithmeticOperator`
- **Replacement:** `header.length + 1`
- **Location:** Line 24 (col 16–33)
- **Tests completed:** 95
- **Covered by:** proxyaddr(req, trust) arguments trust should be required; proxyaddr(req, trust) arguments trust should accept a function; proxyaddr(req, trust) arguments trust should accept an array; proxyaddr(req, trust) arguments trust should accept a number; proxyaddr(req, trust) arguments trust should accept IPv4; proxyaddr(req, trust) arguments trust should accept IPv6; proxyaddr(req, trust) arguments trust should accept IPv4-style IPv6; proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject non-IP; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/internet'; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/255.0.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/255.255.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) arguments trust should be invoked as trust(addr, i); proxyaddr(req, trust) with all trusted should return socket address with no headers; proxyaddr(req, trust) with all trusted should return header value; proxyaddr(req, trust) with all trusted should return furthest header value; proxyaddr(req, trust) with none trusted should return socket address with no headers; proxyaddr(req, trust) with none trusted should return socket address with headers; proxyaddr(req, trust) with some trusted should return socket address with no headers; proxyaddr(req, trust) with some trusted should return socket address when not trusted; proxyaddr(req, trust) with some trusted should return header when socket trusted; proxyaddr(req, trust) with some trusted should return first untrusted after trusted; proxyaddr(req, trust) with some trusted should not skip untrusted; proxyaddr(req, trust) when given array should accept literal IP addresses; proxyaddr(req, trust) when given array should not trust non-IP addresses; proxyaddr(req, trust) when given array should return socket address if none match; proxyaddr(req, trust) when given array when array is empty should return socket address; proxyaddr(req, trust) when given array when array is empty should return socket address with headers; proxyaddr(req, trust) when given IPv4 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv4 address should accept CIDR notation; proxyaddr(req, trust) when given IPv4 address should accept netmask notation; proxyaddr(req, trust) when given IPv6 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with mixed IP versions should match respective versions; proxyaddr(req, trust) with mixed IP versions should not match IPv4 to IPv6; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted non-ip; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted malformed ip; proxyaddr(req, trust) when header contains non-ip addresses should provide all values to function; proxyaddr(req, trust) when socket address undefined should return undefined as address; proxyaddr(req, trust) when socket address undefined should return undefined even with trusted headers; proxyaddr(req, trust) when given number with addresses 10.0.0.1, 10.0.0.2, 192.168.0.1 should use the address that is at most 0 hops away; proxyaddr(req, trust) when given number with addresses 10.0.0.1, 10.0.0.2, 192.168.0.1 should use the address that is at most 1 hops away; proxyaddr(req, trust) when given number with addresses 10.0.0.1, 10.0.0.2, 192.168.0.1 should use the address that is at most 2 hops away; proxyaddr.all(req, trust?) arguments trust should be optional; proxyaddr.all(req, trust?) with no headers should return socket address; proxyaddr.all(req, trust?) with x-forwarded-for header should include x-forwarded-for; proxyaddr.all(req, trust?) with x-forwarded-for header should include x-forwarded-for in the correct order; proxyaddr.all(req, trust?) with trust argument should stop at first untrusted; proxyaddr.all(req, trust?) with trust argument should return only socket address when nothing is trusted; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should accept /32 netmask (255.255.255.255); proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; forwarded(req) should work with `X-Forwarded-For` header; forwarded(req) should include entries from `X-Forwarded-For`; forwarded(req) should skip blank entries; forwarded(req) should trim leading OWS
- **Nearby killed mutants:** `ConditionalExpression`: expected { ip: '1', ips: [ '::1' ] } to deeply equal { ip: '127.0.0.2', …(1) }; `EqualityOperator`: expected '0.0.0.1' to be '10.0.0.1' // Object.is equality; `BlockStatement`: expected { ip: '1', ips: [ '::1' ] } to deeply equal { ip: '127.0.0.2', …(1) }

- **Original (snippet):** `for (let i = header.length - 1; i >= 0; i--) {`

### Survivor 237 — Line 26
- **ID:** `1579`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `case 0x20 /*   */:`
- **Location:** Line 26 (col 7–14)
- **Tests completed:** 37
- **Covered by:** proxyaddr(req, trust) arguments trust should be invoked as trust(addr, i); proxyaddr(req, trust) with all trusted should return furthest header value; proxyaddr(req, trust) with some trusted should return socket address when not trusted; proxyaddr(req, trust) with some trusted should return first untrusted after trusted; proxyaddr(req, trust) with some trusted should not skip untrusted; proxyaddr(req, trust) when given array should accept literal IP addresses; proxyaddr(req, trust) when given array should not trust non-IP addresses; proxyaddr(req, trust) when given array should return socket address if none match; proxyaddr(req, trust) when given array when array is empty should return socket address with headers; proxyaddr(req, trust) when given IPv4 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv4 address should accept CIDR notation; proxyaddr(req, trust) when given IPv4 address should accept netmask notation; proxyaddr(req, trust) when given IPv6 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted non-ip; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted malformed ip; proxyaddr(req, trust) when header contains non-ip addresses should provide all values to function; proxyaddr(req, trust) when socket address undefined should return undefined even with trusted headers; proxyaddr(req, trust) when given number with addresses 10.0.0.1, 10.0.0.2, 192.168.0.1 should use the address that is at most 0 hops away; proxyaddr(req, trust) when given number with addresses 10.0.0.1, 10.0.0.2, 192.168.0.1 should use the address that is at most 1 hops away; proxyaddr(req, trust) when given number with addresses 10.0.0.1, 10.0.0.2, 192.168.0.1 should use the address that is at most 2 hops away; proxyaddr.all(req, trust?) with x-forwarded-for header should include x-forwarded-for in the correct order; proxyaddr.all(req, trust?) with trust argument should stop at first untrusted; proxyaddr.all(req, trust?) with trust argument should return only socket address when nothing is trusted; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; forwarded(req) should include entries from `X-Forwarded-For`; forwarded(req) should skip blank entries; forwarded(req) should trim leading OWS

- **Original (snippet):** `case 0x20 /*   */:
        if (start === end) {
          start = end = i
        }
        break`

## File: `packages/jsonp/src/index.ts`

### Survivor 238 — Line 16
- **ID:** `1596`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 16 (col 14–32)
- **Tests completed:** 4
- **Covered by:** jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /?callback=something" should have expected body
+ actual - expec...; `LogicalOperator`: Request "GET /?callback=something" should have expected body
+ actual - expec...

- **Original (snippet):** `let json = replacer || spaces ? JSON.stringify(value, replacer, spaces) : JSON.stringify(value)`

### Survivor 239 — Line 18
- **ID:** `1599`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 18 (col 7–18)
- **Tests completed:** 4
- **Covered by:** jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /?callback=something" should have expected body
+ actual - expec...; `BlockStatement`: Request "GET /?callback=something" should have expected body
+ actual - expec...

- **Original (snippet):** `if (escapeChars) {`

### Survivor 240 — Line 54
- **ID:** `1619`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 54 (col 41–50)
- **Tests completed:** 3
- **Covered by:** jsonp when no callback is defined; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `StringLiteral`: Request "GET /" should have correct header Content-Type"
+ actual - expected
...

- **Original (snippet):** `res.set('X-Content-Type-Options', 'nosniff')`

### Survivor 241 — Line 59
- **ID:** `1628`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 59 (col 41–62)
- **Tests completed:** 2
- **Covered by:** jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have correct header Content-Type"
+ actual - expected
...; `ConditionalExpression`: Request "GET /?callback=something" should have correct header Content-Type"
+...; `LogicalOperator`: Request "GET /" should have status code 200 but was 500 (body was: Cannot rea...; `ConditionalExpression`: Request "GET /" should have status code 200 but was 500 (body was: Cannot rea...; `EqualityOperator`: Request "GET /" should have status code 200 but was 500 (body was: Cannot rea...

- **Original (snippet):** `if (typeof callback === 'string' && callback.length !== 0) {`

### Survivor 242 — Line 60
- **ID:** `1632`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 60 (col 41–50)
- **Tests completed:** 2
- **Covered by:** jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `StringLiteral`: Request "GET /?callback=something" should have correct header Content-Type"
+...

- **Original (snippet):** `res.set('X-Content-Type-Options', 'nosniff')`

### Survivor 243 — Line 64
- **ID:** `1637`
- **Mutator:** `StringLiteral`
- **Replacement:** `"Stryker was here!"`
- **Location:** Line 64 (col 50–52)
- **Tests completed:** 2
- **Covered by:** jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `Regex`: Request "GET /?callback=something" should have expected body
+ actual - expec...; `Regex`: Request "GET /?callback=something" should have expected body
+ actual - expec...

- **Original (snippet):** `callback = callback.replace(/[^[\]\w$.]/g, '')`

### Survivor 244 — Line 67
- **ID:** `1638`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 67 (col 38–47)
- **Tests completed:** 2
- **Covered by:** jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF

- **Original (snippet):** `body = body.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')`

### Survivor 245 — Line 67
- **ID:** `1639`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 67 (col 68–77)
- **Tests completed:** 2
- **Covered by:** jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF

- **Original (snippet):** `body = body.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')`

## File: `packages/proxy-addr/src/index.ts`

### Survivor 246 — Line 32
- **ID:** `1661`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 32 (col 46–2)
- **Tests completed:** 59
- **Covered by:** proxyaddr(req, trust) arguments trust should accept IPv4; proxyaddr(req, trust) arguments trust should accept IPv6; proxyaddr(req, trust) arguments trust should accept IPv4-style IPv6; proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/internet'; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/255.0.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/255.255.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) when given array should accept literal IP addresses; proxyaddr(req, trust) when given array should not trust non-IP addresses; proxyaddr(req, trust) when given array should return socket address if none match; proxyaddr(req, trust) when given IPv4 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv4 address should accept CIDR notation; proxyaddr(req, trust) when given IPv4 address should accept netmask notation; proxyaddr(req, trust) when given IPv6 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with mixed IP versions should match respective versions; proxyaddr(req, trust) with mixed IP versions should not match IPv4 to IPv6; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted non-ip; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted malformed ip; proxyaddr(req, trust) when socket address undefined should return undefined as address; proxyaddr(req, trust) when socket address undefined should return undefined even with trusted headers; proxyaddr.all(req, trust?) with trust argument should stop at first untrusted; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should accept /32 netmask (255.255.255.255); proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should accept a string array; proxyaddr.compile(trust) arguments trust should accept IPv4; proxyaddr.compile(trust) arguments trust should accept IPv6; proxyaddr.compile(trust) arguments trust should accept IPv4-style IPv6; proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr.compile(trust) arguments trust should not alter input array; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array

- **Original (snippet):** `function isIPv4Mapped(addr: string): boolean {
  if (isIP(addr) !== 6) return false
  const lower = addr.toLowerCase()
  return lower.startsWith('::ffff:') || lower.startsWith('0:0:0:0:0:ffff:')
}`

### Survivor 247 — Line 33
- **ID:** `1662`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 33 (col 7–23)
- **Tests completed:** 59
- **Covered by:** proxyaddr(req, trust) arguments trust should accept IPv4; proxyaddr(req, trust) arguments trust should accept IPv6; proxyaddr(req, trust) arguments trust should accept IPv4-style IPv6; proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/internet'; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/255.0.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/255.255.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) when given array should accept literal IP addresses; proxyaddr(req, trust) when given array should not trust non-IP addresses; proxyaddr(req, trust) when given array should return socket address if none match; proxyaddr(req, trust) when given IPv4 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv4 address should accept CIDR notation; proxyaddr(req, trust) when given IPv4 address should accept netmask notation; proxyaddr(req, trust) when given IPv6 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with mixed IP versions should match respective versions; proxyaddr(req, trust) with mixed IP versions should not match IPv4 to IPv6; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted non-ip; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted malformed ip; proxyaddr(req, trust) when socket address undefined should return undefined as address; proxyaddr(req, trust) when socket address undefined should return undefined even with trusted headers; proxyaddr.all(req, trust?) with trust argument should stop at first untrusted; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should accept /32 netmask (255.255.255.255); proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should accept a string array; proxyaddr.compile(trust) arguments trust should accept IPv4; proxyaddr.compile(trust) arguments trust should accept IPv6; proxyaddr.compile(trust) arguments trust should accept IPv4-style IPv6; proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr.compile(trust) arguments trust should not alter input array; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array

- **Original (snippet):** `if (isIP(addr) !== 6) return false`

### Survivor 248 — Line 33
- **ID:** `1663`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 33 (col 7–23)
- **Tests completed:** 59
- **Covered by:** proxyaddr(req, trust) arguments trust should accept IPv4; proxyaddr(req, trust) arguments trust should accept IPv6; proxyaddr(req, trust) arguments trust should accept IPv4-style IPv6; proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/internet'; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/255.0.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/255.255.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) when given array should accept literal IP addresses; proxyaddr(req, trust) when given array should not trust non-IP addresses; proxyaddr(req, trust) when given array should return socket address if none match; proxyaddr(req, trust) when given IPv4 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv4 address should accept CIDR notation; proxyaddr(req, trust) when given IPv4 address should accept netmask notation; proxyaddr(req, trust) when given IPv6 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with mixed IP versions should match respective versions; proxyaddr(req, trust) with mixed IP versions should not match IPv4 to IPv6; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted non-ip; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted malformed ip; proxyaddr(req, trust) when socket address undefined should return undefined as address; proxyaddr(req, trust) when socket address undefined should return undefined even with trusted headers; proxyaddr.all(req, trust?) with trust argument should stop at first untrusted; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should accept /32 netmask (255.255.255.255); proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should accept a string array; proxyaddr.compile(trust) arguments trust should accept IPv4; proxyaddr.compile(trust) arguments trust should accept IPv6; proxyaddr.compile(trust) arguments trust should accept IPv4-style IPv6; proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr.compile(trust) arguments trust should not alter input array; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array

- **Original (snippet):** `if (isIP(addr) !== 6) return false`

### Survivor 249 — Line 33
- **ID:** `1664`
- **Mutator:** `EqualityOperator`
- **Replacement:** `isIP(addr) === 6`
- **Location:** Line 33 (col 7–23)
- **Tests completed:** 59
- **Covered by:** proxyaddr(req, trust) arguments trust should accept IPv4; proxyaddr(req, trust) arguments trust should accept IPv6; proxyaddr(req, trust) arguments trust should accept IPv4-style IPv6; proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/internet'; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/255.0.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/255.255.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) when given array should accept literal IP addresses; proxyaddr(req, trust) when given array should not trust non-IP addresses; proxyaddr(req, trust) when given array should return socket address if none match; proxyaddr(req, trust) when given IPv4 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv4 address should accept CIDR notation; proxyaddr(req, trust) when given IPv4 address should accept netmask notation; proxyaddr(req, trust) when given IPv6 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with mixed IP versions should match respective versions; proxyaddr(req, trust) with mixed IP versions should not match IPv4 to IPv6; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted non-ip; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted malformed ip; proxyaddr(req, trust) when socket address undefined should return undefined as address; proxyaddr(req, trust) when socket address undefined should return undefined even with trusted headers; proxyaddr.all(req, trust?) with trust argument should stop at first untrusted; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should accept /32 netmask (255.255.255.255); proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should accept a string array; proxyaddr.compile(trust) arguments trust should accept IPv4; proxyaddr.compile(trust) arguments trust should accept IPv6; proxyaddr.compile(trust) arguments trust should accept IPv4-style IPv6; proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr.compile(trust) arguments trust should not alter input array; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array

- **Original (snippet):** `if (isIP(addr) !== 6) return false`

### Survivor 250 — Line 33
- **ID:** `1665`
- **Mutator:** `BooleanLiteral`
- **Replacement:** `true`
- **Location:** Line 33 (col 32–37)
- **Tests completed:** 45
- **Covered by:** proxyaddr(req, trust) arguments trust should accept IPv4; proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/internet'; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/255.0.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/ffc0::'; proxyaddr(req, trust) when given array should accept literal IP addresses; proxyaddr(req, trust) when given array should not trust non-IP addresses; proxyaddr(req, trust) when given array should return socket address if none match; proxyaddr(req, trust) when given IPv4 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv4 address should accept CIDR notation; proxyaddr(req, trust) when given IPv4 address should accept netmask notation; proxyaddr(req, trust) with mixed IP versions should match respective versions; proxyaddr(req, trust) with mixed IP versions should not match IPv4 to IPv6; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted non-ip; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted malformed ip; proxyaddr(req, trust) when socket address undefined should return undefined as address; proxyaddr(req, trust) when socket address undefined should return undefined even with trusted headers; proxyaddr.all(req, trust?) with trust argument should stop at first untrusted; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should accept /32 netmask (255.255.255.255); proxyaddr.compile(trust) arguments trust should accept a string array; proxyaddr.compile(trust) arguments trust should accept IPv4; proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr.compile(trust) arguments trust should not alter input array; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array

- **Original (snippet):** `if (isIP(addr) !== 6) return false`

### Survivor 251 — Line 34
- **ID:** `1666`
- **Mutator:** `MethodExpression`
- **Replacement:** `addr.toUpperCase()`
- **Location:** Line 34 (col 17–35)
- **Tests completed:** 39
- **Covered by:** proxyaddr(req, trust) arguments trust should accept IPv6; proxyaddr(req, trust) arguments trust should accept IPv4-style IPv6; proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/255.255.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) when given IPv6 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with mixed IP versions should match respective versions; proxyaddr(req, trust) with mixed IP versions should not match IPv4 to IPv6; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should accept IPv6; proxyaddr.compile(trust) arguments trust should accept IPv4-style IPv6; proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr.compile(trust) arguments trust should not alter input array; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array

- **Original (snippet):** `const lower = addr.toLowerCase()`

### Survivor 252 — Line 35
- **ID:** `1667`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 35 (col 10–76)
- **Tests completed:** 39
- **Covered by:** proxyaddr(req, trust) arguments trust should accept IPv6; proxyaddr(req, trust) arguments trust should accept IPv4-style IPv6; proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/255.255.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) when given IPv6 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with mixed IP versions should match respective versions; proxyaddr(req, trust) with mixed IP versions should not match IPv4 to IPv6; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should accept IPv6; proxyaddr.compile(trust) arguments trust should accept IPv4-style IPv6; proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr.compile(trust) arguments trust should not alter input array; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array

- **Original (snippet):** `return lower.startsWith('::ffff:') || lower.startsWith('0:0:0:0:0:ffff:')`

### Survivor 253 — Line 35
- **ID:** `1668`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 35 (col 10–76)
- **Tests completed:** 39
- **Covered by:** proxyaddr(req, trust) arguments trust should accept IPv6; proxyaddr(req, trust) arguments trust should accept IPv4-style IPv6; proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/255.255.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) when given IPv6 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with mixed IP versions should match respective versions; proxyaddr(req, trust) with mixed IP versions should not match IPv4 to IPv6; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should accept IPv6; proxyaddr.compile(trust) arguments trust should accept IPv4-style IPv6; proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr.compile(trust) arguments trust should not alter input array; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array

- **Original (snippet):** `return lower.startsWith('::ffff:') || lower.startsWith('0:0:0:0:0:ffff:')`

### Survivor 254 — Line 35
- **ID:** `1669`
- **Mutator:** `LogicalOperator`
- **Replacement:** `lower.startsWith('::ffff:') && lower.startsWith('0:0:0:0:0:ffff:')`
- **Location:** Line 35 (col 10–76)
- **Tests completed:** 39
- **Covered by:** proxyaddr(req, trust) arguments trust should accept IPv6; proxyaddr(req, trust) arguments trust should accept IPv4-style IPv6; proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/255.255.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) when given IPv6 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with mixed IP versions should match respective versions; proxyaddr(req, trust) with mixed IP versions should not match IPv4 to IPv6; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should accept IPv6; proxyaddr.compile(trust) arguments trust should accept IPv4-style IPv6; proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr.compile(trust) arguments trust should not alter input array; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array

- **Original (snippet):** `return lower.startsWith('::ffff:') || lower.startsWith('0:0:0:0:0:ffff:')`

### Survivor 255 — Line 35
- **ID:** `1670`
- **Mutator:** `MethodExpression`
- **Replacement:** `lower.endsWith('::ffff:')`
- **Location:** Line 35 (col 10–37)
- **Tests completed:** 39
- **Covered by:** proxyaddr(req, trust) arguments trust should accept IPv6; proxyaddr(req, trust) arguments trust should accept IPv4-style IPv6; proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/255.255.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) when given IPv6 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with mixed IP versions should match respective versions; proxyaddr(req, trust) with mixed IP versions should not match IPv4 to IPv6; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should accept IPv6; proxyaddr.compile(trust) arguments trust should accept IPv4-style IPv6; proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr.compile(trust) arguments trust should not alter input array; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array

- **Original (snippet):** `return lower.startsWith('::ffff:') || lower.startsWith('0:0:0:0:0:ffff:')`

### Survivor 256 — Line 35
- **ID:** `1671`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 35 (col 27–36)
- **Tests completed:** 39
- **Covered by:** proxyaddr(req, trust) arguments trust should accept IPv6; proxyaddr(req, trust) arguments trust should accept IPv4-style IPv6; proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/255.255.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) when given IPv6 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with mixed IP versions should match respective versions; proxyaddr(req, trust) with mixed IP versions should not match IPv4 to IPv6; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should accept IPv6; proxyaddr.compile(trust) arguments trust should accept IPv4-style IPv6; proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr.compile(trust) arguments trust should not alter input array; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array

- **Original (snippet):** `return lower.startsWith('::ffff:') || lower.startsWith('0:0:0:0:0:ffff:')`

### Survivor 257 — Line 35
- **ID:** `1672`
- **Mutator:** `MethodExpression`
- **Replacement:** `lower.endsWith('0:0:0:0:0:ffff:')`
- **Location:** Line 35 (col 41–76)
- **Tests completed:** 26
- **Covered by:** proxyaddr(req, trust) arguments trust should accept IPv6; proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/255.255.255.0'; proxyaddr(req, trust) when given IPv6 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with mixed IP versions should match respective versions; proxyaddr(req, trust) with mixed IP versions should not match IPv4 to IPv6; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should accept IPv6; proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr.compile(trust) arguments trust should not alter input array; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array

- **Original (snippet):** `return lower.startsWith('::ffff:') || lower.startsWith('0:0:0:0:0:ffff:')`

### Survivor 258 — Line 35
- **ID:** `1673`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 35 (col 58–75)
- **Tests completed:** 26
- **Covered by:** proxyaddr(req, trust) arguments trust should accept IPv6; proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/255.255.255.0'; proxyaddr(req, trust) when given IPv6 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with mixed IP versions should match respective versions; proxyaddr(req, trust) with mixed IP versions should not match IPv4 to IPv6; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should accept IPv6; proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr.compile(trust) arguments trust should not alter input array; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array

- **Original (snippet):** `return lower.startsWith('::ffff:') || lower.startsWith('0:0:0:0:0:ffff:')`

### Survivor 259 — Line 42
- **ID:** `1674`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 42 (col 52–2)
- **Tests completed:** 59
- **Covered by:** proxyaddr(req, trust) arguments trust should accept IPv4; proxyaddr(req, trust) arguments trust should accept IPv6; proxyaddr(req, trust) arguments trust should accept IPv4-style IPv6; proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/internet'; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/255.0.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/255.255.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) when given array should accept literal IP addresses; proxyaddr(req, trust) when given array should not trust non-IP addresses; proxyaddr(req, trust) when given array should return socket address if none match; proxyaddr(req, trust) when given IPv4 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv4 address should accept CIDR notation; proxyaddr(req, trust) when given IPv4 address should accept netmask notation; proxyaddr(req, trust) when given IPv6 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with mixed IP versions should match respective versions; proxyaddr(req, trust) with mixed IP versions should not match IPv4 to IPv6; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted non-ip; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted malformed ip; proxyaddr(req, trust) when socket address undefined should return undefined as address; proxyaddr(req, trust) when socket address undefined should return undefined even with trusted headers; proxyaddr.all(req, trust?) with trust argument should stop at first untrusted; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should accept /32 netmask (255.255.255.255); proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should accept a string array; proxyaddr.compile(trust) arguments trust should accept IPv4; proxyaddr.compile(trust) arguments trust should accept IPv6; proxyaddr.compile(trust) arguments trust should accept IPv4-style IPv6; proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr.compile(trust) arguments trust should not alter input array; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array

- **Original (snippet):** `function mappedToIPv4(addr: string): string | null {
  if (!isIPv4Mapped(addr)) return null
  const lower = addr.toLowerCase()
  const suffix = lower.startsWith('::ffff:') ? addr.substring(7) : addr.substring(15)

  // Dotted decimal format (::ffff:127.0.0.1)
  if (suffix.includes('.')) return suffix

  // Hex format (::ffff:a00:1 -> 10.0.0.1)
  const parts = suffix.split(':')
  if (parts.length === 2) {
    const high = Number.parseInt(parts[0], 16)
    const low = Number.parseInt(parts[1], 16)
    return `${(high >> 8) & 0xff}.${high & 0xff}.${(low >> 8) & 0xff}.${low & 0xff}`
  }
  return null
}`

### Survivor 260 — Line 43
- **ID:** `1675`
- **Mutator:** `BooleanLiteral`
- **Replacement:** `isIPv4Mapped(addr)`
- **Location:** Line 43 (col 7–26)
- **Tests completed:** 59
- **Covered by:** proxyaddr(req, trust) arguments trust should accept IPv4; proxyaddr(req, trust) arguments trust should accept IPv6; proxyaddr(req, trust) arguments trust should accept IPv4-style IPv6; proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/internet'; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/255.0.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/255.255.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) when given array should accept literal IP addresses; proxyaddr(req, trust) when given array should not trust non-IP addresses; proxyaddr(req, trust) when given array should return socket address if none match; proxyaddr(req, trust) when given IPv4 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv4 address should accept CIDR notation; proxyaddr(req, trust) when given IPv4 address should accept netmask notation; proxyaddr(req, trust) when given IPv6 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with mixed IP versions should match respective versions; proxyaddr(req, trust) with mixed IP versions should not match IPv4 to IPv6; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted non-ip; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted malformed ip; proxyaddr(req, trust) when socket address undefined should return undefined as address; proxyaddr(req, trust) when socket address undefined should return undefined even with trusted headers; proxyaddr.all(req, trust?) with trust argument should stop at first untrusted; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should accept /32 netmask (255.255.255.255); proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should accept a string array; proxyaddr.compile(trust) arguments trust should accept IPv4; proxyaddr.compile(trust) arguments trust should accept IPv6; proxyaddr.compile(trust) arguments trust should accept IPv4-style IPv6; proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr.compile(trust) arguments trust should not alter input array; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array

- **Original (snippet):** `if (!isIPv4Mapped(addr)) return null`

### Survivor 261 — Line 43
- **ID:** `1676`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 43 (col 7–26)
- **Tests completed:** 59
- **Covered by:** proxyaddr(req, trust) arguments trust should accept IPv4; proxyaddr(req, trust) arguments trust should accept IPv6; proxyaddr(req, trust) arguments trust should accept IPv4-style IPv6; proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/internet'; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/255.0.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/255.255.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) when given array should accept literal IP addresses; proxyaddr(req, trust) when given array should not trust non-IP addresses; proxyaddr(req, trust) when given array should return socket address if none match; proxyaddr(req, trust) when given IPv4 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv4 address should accept CIDR notation; proxyaddr(req, trust) when given IPv4 address should accept netmask notation; proxyaddr(req, trust) when given IPv6 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with mixed IP versions should match respective versions; proxyaddr(req, trust) with mixed IP versions should not match IPv4 to IPv6; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted non-ip; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted malformed ip; proxyaddr(req, trust) when socket address undefined should return undefined as address; proxyaddr(req, trust) when socket address undefined should return undefined even with trusted headers; proxyaddr.all(req, trust?) with trust argument should stop at first untrusted; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should accept /32 netmask (255.255.255.255); proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should accept a string array; proxyaddr.compile(trust) arguments trust should accept IPv4; proxyaddr.compile(trust) arguments trust should accept IPv6; proxyaddr.compile(trust) arguments trust should accept IPv4-style IPv6; proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr.compile(trust) arguments trust should not alter input array; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array

- **Original (snippet):** `if (!isIPv4Mapped(addr)) return null`

### Survivor 262 — Line 43
- **ID:** `1677`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 43 (col 7–26)
- **Tests completed:** 59
- **Covered by:** proxyaddr(req, trust) arguments trust should accept IPv4; proxyaddr(req, trust) arguments trust should accept IPv6; proxyaddr(req, trust) arguments trust should accept IPv4-style IPv6; proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/internet'; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/255.0.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/255.255.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) when given array should accept literal IP addresses; proxyaddr(req, trust) when given array should not trust non-IP addresses; proxyaddr(req, trust) when given array should return socket address if none match; proxyaddr(req, trust) when given IPv4 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv4 address should accept CIDR notation; proxyaddr(req, trust) when given IPv4 address should accept netmask notation; proxyaddr(req, trust) when given IPv6 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with mixed IP versions should match respective versions; proxyaddr(req, trust) with mixed IP versions should not match IPv4 to IPv6; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted non-ip; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted malformed ip; proxyaddr(req, trust) when socket address undefined should return undefined as address; proxyaddr(req, trust) when socket address undefined should return undefined even with trusted headers; proxyaddr.all(req, trust?) with trust argument should stop at first untrusted; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should accept /32 netmask (255.255.255.255); proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should accept a string array; proxyaddr.compile(trust) arguments trust should accept IPv4; proxyaddr.compile(trust) arguments trust should accept IPv6; proxyaddr.compile(trust) arguments trust should accept IPv4-style IPv6; proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr.compile(trust) arguments trust should not alter input array; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array

- **Original (snippet):** `if (!isIPv4Mapped(addr)) return null`

### Survivor 263 — Line 45
- **ID:** `1682`
- **Mutator:** `MethodExpression`
- **Replacement:** `addr`
- **Location:** Line 45 (col 68–86)
- **Tests completed:** 1
- **Covered by:** proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6
- **Nearby killed mutants:** `StringLiteral`: expected '0:0:0:0:0:ffff:127.0.0.1' to be '10.0.0.1' // Object.is equality

- **Original (snippet):** `const suffix = lower.startsWith('::ffff:') ? addr.substring(7) : addr.substring(15)`

### Survivor 264 — Line 51
- **ID:** `1686`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 51 (col 30–33)
- **Tests completed:** 12
- **Covered by:** proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'

- **Original (snippet):** `const parts = suffix.split(':')`

### Survivor 265 — Line 52
- **ID:** `1687`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 52 (col 7–25)
- **Tests completed:** 12
- **Covered by:** proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'

- **Original (snippet):** `if (parts.length === 2) {`

### Survivor 266 — Line 52
- **ID:** `1688`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 52 (col 7–25)
- **Tests completed:** 12
- **Covered by:** proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'

- **Original (snippet):** `if (parts.length === 2) {`

### Survivor 267 — Line 52
- **ID:** `1689`
- **Mutator:** `EqualityOperator`
- **Replacement:** `parts.length !== 2`
- **Location:** Line 52 (col 7–25)
- **Tests completed:** 12
- **Covered by:** proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'

- **Original (snippet):** `if (parts.length === 2) {`

### Survivor 268 — Line 52
- **ID:** `1690`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 52 (col 27–4)
- **Tests completed:** 11
- **Covered by:** proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'

- **Original (snippet):** `if (parts.length === 2) {
    const high = Number.parseInt(parts[0], 16)
    const low = Number.parseInt(parts[1], 16)
    return `${(high >> 8) & 0xff}.${high & 0xff}.${(low >> 8) & 0xff}.${low & 0xff}`
  }`

### Survivor 269 — Line 73
- **ID:** `1696`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 73 (col 7–26)
- **Tests completed:** 4
- **Covered by:** proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/255.0.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/ffc0::'; proxyaddr(req, trust) when given IPv4 address should accept netmask notation; proxyaddr.compile(trust) arguments trust should accept /32 netmask (255.255.255.255)
- **Nearby killed mutants:** `ConditionalExpression`: invalid range on address: 10.0.0.2/255.255.255.192; `EqualityOperator`: invalid range on address: 10.0.0.2/255.255.255.192

- **Original (snippet):** `if (isIP(netmask) !== 4) return null`

### Survivor 270 — Line 78
- **ID:** `1700`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 78 (col 61–64)
- **Tests completed:** 3
- **Covered by:** proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/255.0.255.0'; proxyaddr(req, trust) when given IPv4 address should accept netmask notation; proxyaddr.compile(trust) arguments trust should accept /32 netmask (255.255.255.255)
- **Nearby killed mutants:** `ArrowFunction`: assert.fail(); `StringLiteral`: invalid range on address: 10.0.0.2/255.255.255.192

- **Original (snippet):** `const binary = parts.map((p) => p.toString(2).padStart(8, '0')).join('')`

### Survivor 271 — Line 127
- **ID:** `1741`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 127 (col 12–30)
- **Tests completed:** 28
- **Covered by:** proxyaddr(req, trust) arguments trust should accept an array; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) when given array should accept literal IP addresses; proxyaddr(req, trust) when given array should not trust non-IP addresses; proxyaddr(req, trust) when given array should return socket address if none match; proxyaddr(req, trust) when given array when array is empty should return socket address; proxyaddr(req, trust) when given array when array is empty should return socket address with headers; proxyaddr(req, trust) when given IPv4 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv6 address should accept literal IP addresses; proxyaddr(req, trust) with mixed IP versions should match respective versions; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr.all(req, trust?) with trust argument should return only socket address when nothing is trusted; proxyaddr.compile(trust) arguments trust should be required; proxyaddr.compile(trust) arguments trust should accept a string array; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should not alter input array; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array
- **Nearby killed mutants:** `ConditionalExpression`: unsupported trust argument; `MethodExpression`: expected [ Array(3) ] to deeply equal [ 'loopback', '10.0.0.1' ]

- **Original (snippet):** `else if (Array.isArray(val)) trust = val.slice()`

### Survivor 272 — Line 128
- **ID:** `1744`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 128 (col 28–56)
- **Tests completed:** 1
- **Covered by:** proxyaddr.compile(trust) arguments trust should be required

- **Original (snippet):** `else throw new TypeError('unsupported trust argument')`

### Survivor 273 — Line 130
- **ID:** `1746`
- **Mutator:** `EqualityOperator`
- **Replacement:** `i <= trust.length`
- **Location:** Line 130 (col 19–35)
- **Tests completed:** 66
- **Covered by:** proxyaddr(req, trust) arguments trust should accept an array; proxyaddr(req, trust) arguments trust should accept IPv4; proxyaddr(req, trust) arguments trust should accept IPv6; proxyaddr(req, trust) arguments trust should accept IPv4-style IPv6; proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject non-IP; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/internet'; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/255.0.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/255.255.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) when given array should accept literal IP addresses; proxyaddr(req, trust) when given array should not trust non-IP addresses; proxyaddr(req, trust) when given array should return socket address if none match; proxyaddr(req, trust) when given array when array is empty should return socket address; proxyaddr(req, trust) when given array when array is empty should return socket address with headers; proxyaddr(req, trust) when given IPv4 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv4 address should accept CIDR notation; proxyaddr(req, trust) when given IPv4 address should accept netmask notation; proxyaddr(req, trust) when given IPv6 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with mixed IP versions should match respective versions; proxyaddr(req, trust) with mixed IP versions should not match IPv4 to IPv6; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted non-ip; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted malformed ip; proxyaddr(req, trust) when socket address undefined should return undefined as address; proxyaddr(req, trust) when socket address undefined should return undefined even with trusted headers; proxyaddr.all(req, trust?) with trust argument should stop at first untrusted; proxyaddr.all(req, trust?) with trust argument should return only socket address when nothing is trusted; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should accept /32 netmask (255.255.255.255); proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should accept a string array; proxyaddr.compile(trust) arguments trust should accept IPv4; proxyaddr.compile(trust) arguments trust should accept IPv6; proxyaddr.compile(trust) arguments trust should accept IPv4-style IPv6; proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject non-IP 'blargh'; proxyaddr.compile(trust) arguments trust should reject non-IP '-1'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr.compile(trust) arguments trust should not alter input array; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array
- **Nearby killed mutants:** `ConditionalExpression`: invalid IP address: loopback; `BlockStatement`: invalid IP address: loopback

- **Original (snippet):** `for (let i = 0; i < trust.length; i++) {`

### Survivor 274 — Line 137
- **ID:** `1753`
- **Mutator:** `AssignmentOperator`
- **Replacement:** `i -= namedRange.length - 1`
- **Location:** Line 137 (col 5–31)
- **Tests completed:** 8
- **Covered by:** proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should not alter input array
- **Nearby killed mutants:** `ArithmeticOperator`: invalid IP address: linklocal

- **Original (snippet):** `i += namedRange.length - 1`

### Survivor 275 — Line 161
- **ID:** `1765`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 161 (col 7–16)
- **Tests completed:** 49
- **Covered by:** proxyaddr(req, trust) arguments trust should accept an array; proxyaddr(req, trust) arguments trust should accept IPv4; proxyaddr(req, trust) arguments trust should accept IPv6; proxyaddr(req, trust) arguments trust should accept IPv4-style IPv6; proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) when given array should accept literal IP addresses; proxyaddr(req, trust) when given array should not trust non-IP addresses; proxyaddr(req, trust) when given array should return socket address if none match; proxyaddr(req, trust) when given array when array is empty should return socket address; proxyaddr(req, trust) when given array when array is empty should return socket address with headers; proxyaddr(req, trust) when given IPv4 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv4 address should accept CIDR notation; proxyaddr(req, trust) when given IPv4 address should accept netmask notation; proxyaddr(req, trust) when given IPv6 address should accept literal IP addresses; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with mixed IP versions should match respective versions; proxyaddr(req, trust) with mixed IP versions should not match IPv4 to IPv6; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted non-ip; proxyaddr(req, trust) when header contains non-ip addresses should stop at first non-trusted malformed ip; proxyaddr(req, trust) when socket address undefined should return undefined as address; proxyaddr(req, trust) when socket address undefined should return undefined even with trusted headers; proxyaddr.all(req, trust?) with trust argument should stop at first untrusted; proxyaddr.all(req, trust?) with trust argument should return only socket address when nothing is trusted; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should accept /32 netmask (255.255.255.255); proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should accept a string array; proxyaddr.compile(trust) arguments trust should accept IPv4; proxyaddr.compile(trust) arguments trust should accept IPv6; proxyaddr.compile(trust) arguments trust should accept IPv4-style IPv6; proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should not alter input array; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array
- **Nearby killed mutants:** `ConditionalExpression`: expected '10.0.0.1' to be '192.168.0.1' // Object.is equality; `EqualityOperator`: expected '10.0.0.1' to be '192.168.0.1' // Object.is equality

- **Original (snippet):** `if (len === 0) return trustNone`

### Survivor 276 — Line 223
- **ID:** `1831`
- **Mutator:** `LogicalOperator`
- **Replacement:** `range == null && range <= 0`
- **Location:** Line 223 (col 7–34)
- **Tests completed:** 30
- **Covered by:** proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/internet'; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/255.0.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/255.255.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) when given IPv4 address should accept CIDR notation; proxyaddr(req, trust) when given IPv4 address should accept netmask notation; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr.compile(trust) arguments trust should accept /32 netmask (255.255.255.255); proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr.compile(trust) arguments trust should not alter input array
- **Nearby killed mutants:** `ConditionalExpression`: invalid range on address: 127.0.0.1/8; `ConditionalExpression`: expected 'The "prefix" argument must be of type…' to contain 'invalid range o...; `LogicalOperator`: expected 'The "prefix" argument must be of type…' to contain 'invalid range o...; `ConditionalExpression`: expected 'The "prefix" argument must be of type…' to contain 'invalid range o...; `EqualityOperator`: invalid range on address: 127.0.0.1/8

- **Original (snippet):** `if (range == null || range <= 0 || range > max) throw new TypeError(`invalid range on address: ${note}`)`

### Survivor 277 — Line 223
- **ID:** `1832`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 223 (col 7–20)
- **Tests completed:** 30
- **Covered by:** proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/internet'; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/255.0.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '10.0.0.1/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/ffc0::'; proxyaddr(req, trust) arguments trust should reject bad netmask 'fe80::/255.255.255.0'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) when given IPv4 address should accept CIDR notation; proxyaddr(req, trust) when given IPv4 address should accept netmask notation; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr.compile(trust) arguments trust should accept /32 netmask (255.255.255.255); proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr.compile(trust) arguments trust should not alter input array
- **Nearby killed mutants:** `ConditionalExpression`: invalid range on address: 127.0.0.1/8; `ConditionalExpression`: expected 'The "prefix" argument must be of type…' to contain 'invalid range o...; `LogicalOperator`: expected 'The "prefix" argument must be of type…' to contain 'invalid range o...; `ConditionalExpression`: expected 'The "prefix" argument must be of type…' to contain 'invalid range o...; `EqualityOperator`: invalid range on address: 127.0.0.1/8

- **Original (snippet):** `if (range == null || range <= 0 || range > max) throw new TypeError(`invalid range on address: ${note}`)`

### Survivor 278 — Line 223
- **ID:** `1834`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 223 (col 24–34)
- **Tests completed:** 22
- **Covered by:** proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) when given IPv4 address should accept CIDR notation; proxyaddr(req, trust) when given IPv4 address should accept netmask notation; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr.compile(trust) arguments trust should accept /32 netmask (255.255.255.255); proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should not alter input array
- **Nearby killed mutants:** `ConditionalExpression`: invalid range on address: 127.0.0.1/8; `ConditionalExpression`: expected 'The "prefix" argument must be of type…' to contain 'invalid range o...; `LogicalOperator`: expected 'The "prefix" argument must be of type…' to contain 'invalid range o...; `ConditionalExpression`: expected 'The "prefix" argument must be of type…' to contain 'invalid range o...; `EqualityOperator`: invalid range on address: 127.0.0.1/8

- **Original (snippet):** `if (range == null || range <= 0 || range > max) throw new TypeError(`invalid range on address: ${note}`)`

### Survivor 279 — Line 223
- **ID:** `1835`
- **Mutator:** `EqualityOperator`
- **Replacement:** `range < 0`
- **Location:** Line 223 (col 24–34)
- **Tests completed:** 22
- **Covered by:** proxyaddr(req, trust) arguments trust should accept pre-defined names; proxyaddr(req, trust) arguments trust should accept pre-defined names in an array; proxyaddr(req, trust) arguments trust should not alter input array; proxyaddr(req, trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) when given IPv4 address should accept CIDR notation; proxyaddr(req, trust) when given IPv4 address should accept netmask notation; proxyaddr(req, trust) when given IPv6 address should accept CIDR notation; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr(req, trust) when given pre-defined names should accept single pre-defined name; proxyaddr(req, trust) when given pre-defined names should accept multiple pre-defined names; proxyaddr.compile(trust) arguments trust should accept /32 netmask (255.255.255.255); proxyaddr.compile(trust) arguments trust should accept pre-defined names; proxyaddr.compile(trust) arguments trust should accept pre-defined names in an array; proxyaddr.compile(trust) arguments trust should reject bad CIDR '10.0.0.1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::1/6000'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should not alter input array
- **Nearby killed mutants:** `ConditionalExpression`: invalid range on address: 127.0.0.1/8; `ConditionalExpression`: expected 'The "prefix" argument must be of type…' to contain 'invalid range o...; `LogicalOperator`: expected 'The "prefix" argument must be of type…' to contain 'invalid range o...; `ConditionalExpression`: expected 'The "prefix" argument must be of type…' to contain 'invalid range o...; `EqualityOperator`: invalid range on address: 127.0.0.1/8

- **Original (snippet):** `if (range == null || range <= 0 || range > max) throw new TypeError(`invalid range on address: ${note}`)`

### Survivor 280 — Line 45
- **ID:** `1681`
- **Mutator:** `MethodExpression`
- **Replacement:** `addr`
- **Location:** Line 45 (col 48–65)
- **Tests completed:** 20
- **Covered by:** proxyaddr(req, trust) arguments trust should accept IPv4-style IPv6; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should accept IPv4-style IPv6; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array
- **Nearby killed mutants:** `StringLiteral`: expected '0:0:0:0:0:ffff:127.0.0.1' to be '10.0.0.1' // Object.is equality

- **Original (snippet):** `const suffix = lower.startsWith('::ffff:') ? addr.substring(7) : addr.substring(15)`

### Survivor 281 — Line 45
- **ID:** `1679`
- **Mutator:** `MethodExpression`
- **Replacement:** `lower.endsWith('::ffff:')`
- **Location:** Line 45 (col 18–45)
- **Tests completed:** 21
- **Covered by:** proxyaddr(req, trust) arguments trust should accept IPv4-style IPv6; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should accept IPv4-style IPv6; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array
- **Nearby killed mutants:** `StringLiteral`: expected '0:0:0:0:0:ffff:127.0.0.1' to be '10.0.0.1' // Object.is equality

- **Original (snippet):** `const suffix = lower.startsWith('::ffff:') ? addr.substring(7) : addr.substring(15)`

### Survivor 282 — Line 44
- **ID:** `1678`
- **Mutator:** `MethodExpression`
- **Replacement:** `addr.toUpperCase()`
- **Location:** Line 44 (col 17–35)
- **Tests completed:** 21
- **Covered by:** proxyaddr(req, trust) arguments trust should accept IPv4-style IPv6; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should accept IPv4-style IPv6; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array

- **Original (snippet):** `const lower = addr.toLowerCase()`

### Survivor 283 — Line 48
- **ID:** `1684`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 48 (col 7–27)
- **Tests completed:** 21
- **Covered by:** proxyaddr(req, trust) arguments trust should accept IPv4-style IPv6; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr(req, trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; proxyaddr(req, trust) arguments trust should reject bad netmask '::ffff:a00:2/255.255.255.0'; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv4 netmask trust to IPv6 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match IPv6 trust to IPv4 request; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv6 CIDR; proxyaddr(req, trust) with IPv4-mapped IPv6 addresses should match CIDR notation for IPv4-mapped address mixed with IPv4 addresses; proxyaddr.compile(trust) arguments trust should accept long-form IPv4-mapped IPv6; proxyaddr.compile(trust) arguments trust should handle malformed IPv4-mapped address (::ffff:1); proxyaddr.compile(trust) arguments trust should accept IPv4-style IPv6; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/136'; proxyaddr.compile(trust) arguments trust should reject bad CIDR '::ffff:a00:2/-1'; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array
- **Nearby killed mutants:** `ConditionalExpression`: expected '::ffff:a00:1' to be '192.168.0.1' // Object.is equality; `StringLiteral`: expected '::ffff:a00:1' to be '192.168.0.1' // Object.is equality

- **Original (snippet):** `if (suffix.includes('.')) return suffix`

## File: `packages/rate-limit/src/memory-store.ts`

### Survivor 284 — Line 27
- **ID:** `1850`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 27 (col 9–23)
- **Tests completed:** 2
- **Covered by:** MemoryStore store decrements the key for the store each decrement
- **Nearby killed mutants:** `ConditionalExpression`: expected 3 to deeply equal 1; `UpdateOperator`: expected 5 to deeply equal 1

- **Original (snippet):** `if (this.hits[key]) this.hits[key]--`

## File: `packages/rate-limit/src/rate-limit.ts`

### Survivor 285 — Line 95
- **ID:** `1890`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 95 (col 11–38)
- **Tests completed:** 17
- **Covered by:** rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have correct header x-ratelimit-limit"
+ actual - expe...; `BooleanLiteral`: Request "GET /" should have correct header x-ratelimit-limit"
+ actual - expe...; `BlockStatement`: Request "GET /" should have correct header x-ratelimit-limit"
+ actual - expe...

- **Original (snippet):** `if (headers && !res.headersSent) {`

### Survivor 286 — Line 95
- **ID:** `1892`
- **Mutator:** `LogicalOperator`
- **Replacement:** `headers || !res.headersSent`
- **Location:** Line 95 (col 11–38)
- **Tests completed:** 17
- **Covered by:** rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have correct header x-ratelimit-limit"
+ actual - expe...; `BooleanLiteral`: Request "GET /" should have correct header x-ratelimit-limit"
+ actual - expe...; `BlockStatement`: Request "GET /" should have correct header x-ratelimit-limit"
+ actual - expe...

- **Original (snippet):** `if (headers && !res.headersSent) {`

### Survivor 287 — Line 101
- **ID:** `1902`
- **Mutator:** `ArithmeticOperator`
- **Replacement:** `resetTime.getTime() * 1000`
- **Location:** Line 101 (col 56–82)
- **Tests completed:** 10
- **Covered by:** rate-limit request counting should let the first request through; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should call onLimitReached when limit is first reached
- **Nearby killed mutants:** `StringLiteral`: Request "GET /" should have status code 200 but was 500 (body was: Header nam...

- **Original (snippet):** `res.setHeader('X-RateLimit-Reset', Math.ceil(resetTime.getTime() / 1000))`

### Survivor 288 — Line 104
- **ID:** `1903`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 104 (col 11–57)
- **Tests completed:** 17
- **Covered by:** rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have correct header ratelimit-limit"
+ actual - expect...; `BooleanLiteral`: Request "GET /" should have correct header ratelimit-limit"
+ actual - expect...; `BlockStatement`: Request "GET /" should have correct header ratelimit-limit"
+ actual - expect...

- **Original (snippet):** `if (draftPolliRatelimitHeaders && !res.headersSent) {`

### Survivor 289 — Line 104
- **ID:** `1905`
- **Mutator:** `LogicalOperator`
- **Replacement:** `draftPolliRatelimitHeaders || !res.headersSent`
- **Location:** Line 104 (col 11–57)
- **Tests completed:** 17
- **Covered by:** rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have correct header ratelimit-limit"
+ actual - expect...; `BooleanLiteral`: Request "GET /" should have correct header ratelimit-limit"
+ actual - expect...; `BlockStatement`: Request "GET /" should have correct header ratelimit-limit"
+ actual - expect...

- **Original (snippet):** `if (draftPolliRatelimitHeaders && !res.headersSent) {`

### Survivor 290 — Line 113
- **ID:** `1917`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 113 (col 11–55)
- **Tests completed:** 17
- **Covered by:** rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime
- **Nearby killed mutants:** `ConditionalExpression`: expected false to be truthy; `LogicalOperator`: expected false to be truthy; `BlockStatement`: expected false to be truthy

- **Original (snippet):** `if (skipFailedRequests || skipSuccessfulRequests) {`

### Survivor 291 — Line 116
- **ID:** `1924`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 116 (col 15–27)
- **Tests completed:** 1
- **Covered by:** rate-limit request counting should decrement hits with failed response and skipFailedRequests
- **Nearby killed mutants:** `BooleanLiteral`: expected false to be truthy; `ConditionalExpression`: expected false to be truthy; `BlockStatement`: expected false to be truthy

- **Original (snippet):** `if (!decremented) {`

### Survivor 292 — Line 118
- **ID:** `1927`
- **Mutator:** `BooleanLiteral`
- **Replacement:** `false`
- **Location:** Line 118 (col 27–31)
- **Tests completed:** 1
- **Covered by:** rate-limit request counting should decrement hits with failed response and skipFailedRequests

- **Original (snippet):** `decremented = true`

### Survivor 293 — Line 124
- **ID:** `1935`
- **Mutator:** `EqualityOperator`
- **Replacement:** `res.statusCode > 400`
- **Location:** Line 124 (col 17–38)
- **Tests completed:** 2
- **Covered by:** rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit headers should not decrement on successful requests when skipFailedRequests is true
- **Nearby killed mutants:** `ConditionalExpression`: expected true to be falsy; `ConditionalExpression`: expected false to be truthy; `EqualityOperator`: expected false to be truthy

- **Original (snippet):** `if (res.statusCode >= 400) decrementKey()`

### Survivor 294 — Line 127
- **ID:** `1937`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 127 (col 18–25)
- **Tests completed:** 2
- **Covered by:** rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit headers should not decrement on successful requests when skipFailedRequests is true

- **Original (snippet):** `res.on('close', () => {`

### Survivor 295 — Line 127
- **ID:** `1938`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 127 (col 33–12)
- **Tests completed:** 2
- **Covered by:** rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit headers should not decrement on successful requests when skipFailedRequests is true

- **Original (snippet):** `res.on('close', () => {
            if (!res.writableEnded) decrementKey()
          })`

### Survivor 296 — Line 128
- **ID:** `1941`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 128 (col 17–35)
- **Tests completed:** 2
- **Covered by:** rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit headers should not decrement on successful requests when skipFailedRequests is true
- **Nearby killed mutants:** `BooleanLiteral`: expected true to be falsy; `ConditionalExpression`: expected true to be falsy

- **Original (snippet):** `if (!res.writableEnded) decrementKey()`

### Survivor 297 — Line 131
- **ID:** `1942`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 131 (col 18–25)
- **Tests completed:** 2
- **Covered by:** rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit headers should not decrement on successful requests when skipFailedRequests is true

- **Original (snippet):** `res.on('error', () => decrementKey())`

### Survivor 298 — Line 131
- **ID:** `1943`
- **Mutator:** `ArrowFunction`
- **Replacement:** `() => undefined`
- **Location:** Line 131 (col 27–47)
- **Tests completed:** 2
- **Covered by:** rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit headers should not decrement on successful requests when skipFailedRequests is true

- **Original (snippet):** `res.on('error', () => decrementKey())`

### Survivor 299 — Line 136
- **ID:** `1951`
- **Mutator:** `EqualityOperator`
- **Replacement:** `res.statusCode <= 400`
- **Location:** Line 136 (col 17–37)
- **Tests completed:** 2
- **Covered by:** rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true
- **Nearby killed mutants:** `ConditionalExpression`: expected true to be falsy; `ConditionalExpression`: expected false to be truthy; `EqualityOperator`: expected false to be truthy

- **Original (snippet):** `if (res.statusCode < 400) store.decrement(key)`

## File: `packages/req/src/fresh.ts`

### Survivor 300 — Line 13
- **ID:** `2009`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `case 0x20 /*   */:`
- **Location:** Line 13 (col 7–14)
- **Tests completed:** 5
- **Covered by:** Request extensions req.fresh should handle comma-separated ETags in if-none-match; Request extensions req.fresh should return false when ETag does not match any in comma-separated list; Request extensions req.fresh should handle spaces before ETags in if-none-match; Request extensions req.fresh should handle spaces between comma-separated ETags; Request extensions req.fresh should handle spaces within ETag values correctly

- **Original (snippet):** `case 0x20 /*   */:
        if (start === end) start = end = i + 1
        break`

### Survivor 301 — Line 18
- **ID:** `2019`
- **Mutator:** `ArithmeticOperator`
- **Replacement:** `i - 1`
- **Location:** Line 18 (col 23–28)
- **Tests completed:** 3
- **Covered by:** Request extensions req.fresh should handle comma-separated ETags in if-none-match; Request extensions req.fresh should return false when ETag does not match any in comma-separated list; Request extensions req.fresh should handle spaces between comma-separated ETags

- **Original (snippet):** `start = end = i + 1`

### Survivor 302 — Line 40
- **ID:** `2036`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 40 (col 35–50)
- **Tests completed:** 14
- **Covered by:** send(body) should set 304 status for fresh requests; Request extensions req.fresh returns true when the resource is not modified; Request extensions req.fresh should return false when the resource is modified; Request extensions req.fresh should return false if if-modified-since is greater than last-modified; Request extensions req.fresh should return false if if-modified-since is defined but last-modified is not; Request extensions req.fresh should return true when last-modified is less than or equal to if-modified-since; Request extensions req.fresh should match weak ETags (W/ prefix on request); Request extensions req.fresh should match weak ETags (W/ prefix on response); Request extensions req.fresh should handle comma-separated ETags in if-none-match; Request extensions req.fresh should return false when ETag does not match any in comma-separated list; Request extensions req.fresh should handle spaces before ETags in if-none-match; Request extensions req.fresh should handle spaces between comma-separated ETags; Request extensions req.fresh should handle spaces within ETag values correctly; Request properties req.fresh and req.stale get set

- **Original (snippet):** `const cacheControl = reqHeaders['cache-control']`

### Survivor 303 — Line 41
- **ID:** `2038`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 41 (col 7–71)
- **Tests completed:** 14
- **Covered by:** send(body) should set 304 status for fresh requests; Request extensions req.fresh returns true when the resource is not modified; Request extensions req.fresh should return false when the resource is modified; Request extensions req.fresh should return false if if-modified-since is greater than last-modified; Request extensions req.fresh should return false if if-modified-since is defined but last-modified is not; Request extensions req.fresh should return true when last-modified is less than or equal to if-modified-since; Request extensions req.fresh should match weak ETags (W/ prefix on request); Request extensions req.fresh should match weak ETags (W/ prefix on response); Request extensions req.fresh should handle comma-separated ETags in if-none-match; Request extensions req.fresh should return false when ETag does not match any in comma-separated list; Request extensions req.fresh should handle spaces before ETags in if-none-match; Request extensions req.fresh should handle spaces between comma-separated ETags; Request extensions req.fresh should handle spaces within ETag values correctly; Request properties req.fresh and req.stale get set
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `LogicalOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `BooleanLiteral`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `if (cacheControl && CACHE_CONTROL_NO_CACHE_REGEXP.test(cacheControl)) return false`

### Survivor 304 — Line 44
- **ID:** `2044`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 44 (col 20–37)
- **Tests completed:** 10
- **Covered by:** send(body) should set 304 status for fresh requests; Request extensions req.fresh returns true when the resource is not modified; Request extensions req.fresh should match weak ETags (W/ prefix on request); Request extensions req.fresh should match weak ETags (W/ prefix on response); Request extensions req.fresh should handle comma-separated ETags in if-none-match; Request extensions req.fresh should return false when ETag does not match any in comma-separated list; Request extensions req.fresh should handle spaces before ETags in if-none-match; Request extensions req.fresh should handle spaces between comma-separated ETags; Request extensions req.fresh should handle spaces within ETag values correctly; Request properties req.fresh and req.stale get set
- **Nearby killed mutants:** `ConditionalExpression`: expected false to be true // Object.is equality; `ConditionalExpression`: expected true to be false // Object.is equality; `LogicalOperator`: expected false to be true // Object.is equality; `EqualityOperator`: expected true to be false // Object.is equality; `BlockStatement`: expected true to be false // Object.is equality

- **Original (snippet):** `if (noneMatch && noneMatch !== '*') {`

### Survivor 305 — Line 44
- **ID:** `2046`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 44 (col 34–37)
- **Tests completed:** 10
- **Covered by:** send(body) should set 304 status for fresh requests; Request extensions req.fresh returns true when the resource is not modified; Request extensions req.fresh should match weak ETags (W/ prefix on request); Request extensions req.fresh should match weak ETags (W/ prefix on response); Request extensions req.fresh should handle comma-separated ETags in if-none-match; Request extensions req.fresh should return false when ETag does not match any in comma-separated list; Request extensions req.fresh should handle spaces before ETags in if-none-match; Request extensions req.fresh should handle spaces between comma-separated ETags; Request extensions req.fresh should handle spaces within ETag values correctly; Request properties req.fresh and req.stale get set
- **Nearby killed mutants:** `ConditionalExpression`: expected false to be true // Object.is equality; `ConditionalExpression`: expected true to be false // Object.is equality; `LogicalOperator`: expected false to be true // Object.is equality; `EqualityOperator`: expected true to be false // Object.is equality; `BlockStatement`: expected true to be false // Object.is equality

- **Original (snippet):** `if (noneMatch && noneMatch !== '*') {`

### Survivor 306 — Line 54
- **ID:** `2063`
- **Mutator:** `EqualityOperator`
- **Replacement:** `Date.parse(lastModified) < Date.parse(modifiedSince)`
- **Location:** Line 54 (col 28–81)
- **Tests completed:** 2
- **Covered by:** Request extensions req.fresh should return false if if-modified-since is greater than last-modified; Request extensions req.fresh should return true when last-modified is less than or equal to if-modified-since
- **Nearby killed mutants:** `ConditionalExpression`: expected false to be true // Object.is equality; `ConditionalExpression`: expected true to be false // Object.is equality; `LogicalOperator`: expected true to be false // Object.is equality; `BooleanLiteral`: expected false to be true // Object.is equality; `BooleanLiteral`: expected true to be false // Object.is equality

- **Original (snippet):** `if (!lastModified || !(Date.parse(lastModified) <= Date.parse(modifiedSince))) return false`

## File: `packages/req/src/index.ts`

### Survivor 307 — Line 17
- **ID:** `2070`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 17 (col 12–21)
- **Tests completed:** 34
- **Covered by:** Response extensions res.location(url) "url" is back should set location from "Referer" header; Response extensions res.location(url) "url" is back should set location from "Referrer" header; Response extensions res.location(url) "url" is back should prefer "Referrer" header; Response extensions res.location(url) "url" is back should set the header to "/" without referrer; Request extensions req.get(header) should return a specified header; Request extensions req.get(header) should handle "referer"; Request extensions req.get(header) should handle "referrer"; Request extensions req.get(header) should handle "referer" alternate spelling when called with "referer"; Request extensions req.range should return parsed ranges; Request extensions req.range should cap to the given size; Request extensions req.range should cap to the given size when open-ended; Request extensions req.range should have a .type; Request extensions req.range should accept any type; Request extensions req.range should return undefined if no range; Request extensions req.range with options should return combined ranges if combine set to true; Request extensions req.range with options should return separated ranges if combine set to false; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP

- **Original (snippet):** `case 'referer':`

### Survivor 308 — Line 44
- **ID:** `2082`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 44 (col 7–44)
- **Tests completed:** 122
- **Covered by:** Testing App should launch a basic server; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.fresh returns false if method is neither GET nor HEAD; Request extensions req.fresh returns true when the resource is not modified; Request extensions req.fresh should return false when the resource is modified; Request extensions req.fresh returns false if status code is neither >=200 nor < 300, nor 304; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.sendStatus sends status + text; Response methods res.send sets proper headers; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties req.xhr is false because of node-superagent; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have status code 304 but was 200 (body was: ----------...; `LogicalOperator`: Request "GET /" should have status code 304 but was 200 (body was: stale)
+ a...; `ConditionalExpression`: Request "GET /" should have status code 304 but was 200 (body was: stale)
+ a...; `EqualityOperator`: Request "GET /" should have status code 304 but was 200 (body was: stale)
+ a...; `StringLiteral`: Request "GET /" should have status code 304 but was 200 (body was: stale)
+ a...

- **Original (snippet):** `if (method !== 'GET' && method !== 'HEAD') return false`

### Survivor 309 — Line 44
- **ID:** `2087`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 44 (col 27–44)
- **Tests completed:** 24
- **Covered by:** App methods app.route supports chaining route methods; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; Subapps should handle HEAD requests to sub-app routes; Subapps should handle HEAD request reaching fallback handler; Request extensions req.fresh returns false if method is neither GET nor HEAD
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have status code 304 but was 200 (body was: ----------...; `LogicalOperator`: Request "GET /" should have status code 304 but was 200 (body was: stale)
+ a...; `ConditionalExpression`: Request "GET /" should have status code 304 but was 200 (body was: stale)
+ a...; `EqualityOperator`: Request "GET /" should have status code 304 but was 200 (body was: stale)
+ a...; `StringLiteral`: Request "GET /" should have status code 304 but was 200 (body was: stale)
+ a...

- **Original (snippet):** `if (method !== 'GET' && method !== 'HEAD') return false`

### Survivor 310 — Line 44
- **ID:** `2088`
- **Mutator:** `EqualityOperator`
- **Replacement:** `method === 'HEAD'`
- **Location:** Line 44 (col 27–44)
- **Tests completed:** 24
- **Covered by:** App methods app.route supports chaining route methods; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; Subapps should handle HEAD requests to sub-app routes; Subapps should handle HEAD request reaching fallback handler; Request extensions req.fresh returns false if method is neither GET nor HEAD
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have status code 304 but was 200 (body was: ----------...; `LogicalOperator`: Request "GET /" should have status code 304 but was 200 (body was: stale)
+ a...; `ConditionalExpression`: Request "GET /" should have status code 304 but was 200 (body was: stale)
+ a...; `EqualityOperator`: Request "GET /" should have status code 304 but was 200 (body was: stale)
+ a...; `StringLiteral`: Request "GET /" should have status code 304 but was 200 (body was: stale)
+ a...

- **Original (snippet):** `if (method !== 'GET' && method !== 'HEAD') return false`

### Survivor 311 — Line 44
- **ID:** `2089`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 44 (col 38–44)
- **Tests completed:** 24
- **Covered by:** App methods app.route supports chaining route methods; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; Subapps should handle HEAD requests to sub-app routes; Subapps should handle HEAD request reaching fallback handler; Request extensions req.fresh returns false if method is neither GET nor HEAD
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have status code 304 but was 200 (body was: ----------...; `LogicalOperator`: Request "GET /" should have status code 304 but was 200 (body was: stale)
+ a...; `ConditionalExpression`: Request "GET /" should have status code 304 but was 200 (body was: stale)
+ a...; `EqualityOperator`: Request "GET /" should have status code 304 but was 200 (body was: stale)
+ a...; `StringLiteral`: Request "GET /" should have status code 304 but was 200 (body was: stale)
+ a...

- **Original (snippet):** `if (method !== 'GET' && method !== 'HEAD') return false`

### Survivor 312 — Line 47
- **ID:** `2091`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 47 (col 7–56)
- **Tests completed:** 104
- **Covered by:** Testing App should launch a basic server; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.head handles head request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.fresh returns true when the resource is not modified; Request extensions req.fresh should return false when the resource is modified; Request extensions req.fresh returns false if status code is neither >=200 nor < 300, nor 304; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.sendStatus sends status + text; Response methods res.send sets proper headers; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties req.xhr is false because of node-superagent; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `LogicalOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `if ((status >= 200 && status < 300) || status === 304) {`

### Survivor 313 — Line 47
- **ID:** `2095`
- **Mutator:** `LogicalOperator`
- **Replacement:** `status >= 200 || status < 300`
- **Location:** Line 47 (col 8–37)
- **Tests completed:** 104
- **Covered by:** Testing App should launch a basic server; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.head handles head request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.fresh returns true when the resource is not modified; Request extensions req.fresh should return false when the resource is modified; Request extensions req.fresh returns false if status code is neither >=200 nor < 300, nor 304; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.sendStatus sends status + text; Response methods res.send sets proper headers; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties req.xhr is false because of node-superagent; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `LogicalOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `if ((status >= 200 && status < 300) || status === 304) {`

### Survivor 314 — Line 47
- **ID:** `2096`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 47 (col 8–21)
- **Tests completed:** 104
- **Covered by:** Testing App should launch a basic server; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.head handles head request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.fresh returns true when the resource is not modified; Request extensions req.fresh should return false when the resource is modified; Request extensions req.fresh returns false if status code is neither >=200 nor < 300, nor 304; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.sendStatus sends status + text; Response methods res.send sets proper headers; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties req.xhr is false because of node-superagent; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `LogicalOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `if ((status >= 200 && status < 300) || status === 304) {`

### Survivor 315 — Line 47
- **ID:** `2099`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 47 (col 25–37)
- **Tests completed:** 104
- **Covered by:** Testing App should launch a basic server; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.head handles head request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.fresh returns true when the resource is not modified; Request extensions req.fresh should return false when the resource is modified; Request extensions req.fresh returns false if status code is neither >=200 nor < 300, nor 304; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.sendStatus sends status + text; Response methods res.send sets proper headers; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties req.xhr is false because of node-superagent; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `LogicalOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `if ((status >= 200 && status < 300) || status === 304) {`

### Survivor 316 — Line 47
- **ID:** `2100`
- **Mutator:** `EqualityOperator`
- **Replacement:** `status <= 300`
- **Location:** Line 47 (col 25–37)
- **Tests completed:** 104
- **Covered by:** Testing App should launch a basic server; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.head handles head request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.fresh returns true when the resource is not modified; Request extensions req.fresh should return false when the resource is modified; Request extensions req.fresh returns false if status code is neither >=200 nor < 300, nor 304; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.sendStatus sends status + text; Response methods res.send sets proper headers; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties req.xhr is false because of node-superagent; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `LogicalOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `if ((status >= 200 && status < 300) || status === 304) {`

### Survivor 317 — Line 47
- **ID:** `2102`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 47 (col 42–56)
- **Tests completed:** 11
- **Covered by:** Subapps sends bad request on malformed params; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; Request extensions req.fresh returns false if status code is neither >=200 nor < 300, nor 304; Response methods res.sendStatus sends status + text
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `LogicalOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `if ((status >= 200 && status < 300) || status === 304) {`

### Survivor 318 — Line 47
- **ID:** `2103`
- **Mutator:** `EqualityOperator`
- **Replacement:** `status !== 304`
- **Location:** Line 47 (col 42–56)
- **Tests completed:** 11
- **Covered by:** Subapps sends bad request on malformed params; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; Request extensions req.fresh returns false if status code is neither >=200 nor < 300, nor 304; Response methods res.sendStatus sends status + text
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `LogicalOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `if ((status >= 200 && status < 300) || status === 304) {`

## File: `packages/res/src/append.ts`

### Survivor 319 — Line 10
- **ID:** `2122`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 10 (col 20–46)
- **Tests completed:** 4
- **Covered by:** Response extensions res.cookie(name, value, options) should append to Set-Cookie if called multiple times; Response extensions res.append(field,value) appends value to existing header value; Response extensions res.append(field,value) appends value to existing header array; Response extensions res.append(field,value) appends value array to existing header value
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...; `ConditionalExpression`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...; `LogicalOperator`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...; `ConditionalExpression`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...; `LogicalOperator`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...

- **Original (snippet):** `if (prevVal && typeof newVal !== 'number' && typeof prevVal !== 'number') {`

### Survivor 320 — Line 10
- **ID:** `2124`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 10 (col 38–46)
- **Tests completed:** 4
- **Covered by:** Response extensions res.cookie(name, value, options) should append to Set-Cookie if called multiple times; Response extensions res.append(field,value) appends value to existing header value; Response extensions res.append(field,value) appends value to existing header array; Response extensions res.append(field,value) appends value array to existing header value
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...; `ConditionalExpression`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...; `LogicalOperator`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...; `ConditionalExpression`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...; `LogicalOperator`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...

- **Original (snippet):** `if (prevVal && typeof newVal !== 'number' && typeof prevVal !== 'number') {`

### Survivor 321 — Line 10
- **ID:** `2125`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 10 (col 50–77)
- **Tests completed:** 4
- **Covered by:** Response extensions res.cookie(name, value, options) should append to Set-Cookie if called multiple times; Response extensions res.append(field,value) appends value to existing header value; Response extensions res.append(field,value) appends value to existing header array; Response extensions res.append(field,value) appends value array to existing header value
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...; `ConditionalExpression`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...; `LogicalOperator`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...; `ConditionalExpression`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...; `LogicalOperator`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...

- **Original (snippet):** `if (prevVal && typeof newVal !== 'number' && typeof prevVal !== 'number') {`

### Survivor 322 — Line 10
- **ID:** `2127`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 10 (col 69–77)
- **Tests completed:** 4
- **Covered by:** Response extensions res.cookie(name, value, options) should append to Set-Cookie if called multiple times; Response extensions res.append(field,value) appends value to existing header value; Response extensions res.append(field,value) appends value to existing header array; Response extensions res.append(field,value) appends value array to existing header value
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...; `ConditionalExpression`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...; `LogicalOperator`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...; `ConditionalExpression`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...; `LogicalOperator`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...

- **Original (snippet):** `if (prevVal && typeof newVal !== 'number' && typeof prevVal !== 'number') {`

## File: `packages/res/src/cookie.ts`

### Survivor 323 — Line 32
- **ID:** `2153`
- **Mutator:** `ArithmeticOperator`
- **Replacement:** `Date.now() - options.maxAge`
- **Location:** Line 32 (col 34–61)
- **Tests completed:** 1
- **Covered by:** Response extensions res.cookie(name, value, options) should set "maxAge" and "expires" from options

- **Original (snippet):** `options.expires = new Date(Date.now() + options.maxAge)`

### Survivor 324 — Line 36
- **ID:** `2155`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 36 (col 9–29)
- **Tests completed:** 8
- **Covered by:** Response extensions res.cookie(name, value, options) serializes the cookie and puts it in a Set-Cookie header; Response extensions res.cookie(name, value, options) sets default path to "/" if not specified in options; Response extensions res.cookie(name, value, options) should set "maxAge" and "expires" from options; Response extensions res.cookie(name, value, options) should append to Set-Cookie if called multiple times; Response extensions res.cookie(name, value, options) should serialize object values as JSON; Response extensions res.cookie(name, value, options) should sign cookie when signed option is true and secret is provided; Response extensions res.clearCookie(name, options) sets path to "/" if not specified in options; Response methods res.cookie sends cookies to client
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...; `EqualityOperator`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...; `StringLiteral`: Request "GET /" should have correct header Set-Cookie"
+ actual - expected

 ...

- **Original (snippet):** `if (options.path == null) options.path = '/'`

### Survivor 325 — Line 46
- **ID:** `2163`
- **Mutator:** `StringLiteral`
- **Replacement:** `"Stryker was here!"`
- **Location:** Line 46 (col 38–40)
- **Tests completed:** 1
- **Covered by:** Response extensions res.clearCookie(name, options) sets path to "/" if not specified in options

- **Original (snippet):** `return setCookie(req, res)(name, '', Object.assign({}, { expires: new Date(1), path: '/' }, options))`

## File: `packages/res/src/download.ts`

### Survivor 326 — Line 26
- **ID:** `2174`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 26 (col 16–45)
- **Tests completed:** 5
- **Covered by:** Response extensions res.download(filename) should set Content-Disposition based on path; Response extensions res.download(filename) should set Content-Disposition based on filename; Response extensions res.download(filename) should pass the error to a callback; Response extensions res.download(filename) should ignore Content-Disposition header in options (case-insensitive); Response extensions res.download(filename) should work without a callback
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have correct header X-Custom-Header"
+ actual - expect...; `EqualityOperator`: Request "GET /" should have correct header X-Custom-Header"
+ actual - expect...

- **Original (snippet):** `} else if (typeof options === 'function') {`

### Survivor 327 — Line 26
- **ID:** `2176`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 26 (col 35–45)
- **Tests completed:** 5
- **Covered by:** Response extensions res.download(filename) should set Content-Disposition based on path; Response extensions res.download(filename) should set Content-Disposition based on filename; Response extensions res.download(filename) should pass the error to a callback; Response extensions res.download(filename) should ignore Content-Disposition header in options (case-insensitive); Response extensions res.download(filename) should work without a callback
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have correct header X-Custom-Header"
+ actual - expect...; `EqualityOperator`: Request "GET /" should have correct header X-Custom-Header"
+ actual - expect...

- **Original (snippet):** `} else if (typeof options === 'function') {`

### Survivor 328 — Line 26
- **ID:** `2177`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 26 (col 47–6)
- **Tests completed:** 1
- **Covered by:** Response extensions res.download(filename) should pass the error to a callback
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have correct header X-Custom-Header"
+ actual - expect...; `EqualityOperator`: Request "GET /" should have correct header X-Custom-Header"
+ actual - expect...

- **Original (snippet):** `} else if (typeof options === 'function') {
      done = options
      opts = null
    }`

### Survivor 329 — Line 48
- **ID:** `2195`
- **Mutator:** `LogicalOperator`
- **Replacement:** `done && (() => undefined)`
- **Location:** Line 48 (col 71–96)
- **Tests completed:** 8
- **Covered by:** Response extensions res.download(filename) should set Content-Disposition based on path; Response extensions res.download(filename) should set Content-Disposition based on filename; Response extensions res.download(filename) should pass the error to a callback; Response extensions res.download(filename) should set "root" from options; Response extensions res.download(filename) 'should pass options to sendFile's ReadStream'; Response extensions res.download(filename) should set headers from options; Response extensions res.download(filename) should ignore Content-Disposition header in options (case-insensitive); Response extensions res.download(filename) should work without a callback

- **Original (snippet):** `return sendFile(req, res)(opts.root ? path : resolve(path), opts, done || (() => undefined))`

### Survivor 330 — Line 54
- **ID:** `2199`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 54 (col 9–17)
- **Tests completed:** 2
- **Covered by:** Response extensions res.attachment(filename) should set Content-Disposition without a filename specified; Response extensions res.attachment(filename) should set Content-Disposition with a filename specified
- **Nearby killed mutants:** `ConditionalExpression`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...

- **Original (snippet):** `if (filename) {`

### Survivor 331 — Line 54
- **ID:** `2200`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 54 (col 19–6)
- **Tests completed:** 1
- **Covered by:** Response extensions res.attachment(filename) should set Content-Disposition with a filename specified
- **Nearby killed mutants:** `ConditionalExpression`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...

- **Original (snippet):** `if (filename) {
      setContentType(res)(extname(filename))
      filename = basename(filename)
    }`

## File: `packages/res/src/format.ts`

### Survivor 332 — Line 27
- **ID:** `2204`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 27 (col 9–11)
- **Tests completed:** 10
- **Covered by:** Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send an empty response for unsupported MIME types; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Response extensions res.format(obj) should throw 406 status when invalid MIME is specified; Response extensions res.format(obj) should call `default` as a function if specified; Response extensions res.format(obj) should return 406 when object has no keys

- **Original (snippet):** `if (fn) obj.default = undefined`

### Survivor 333 — Line 27
- **ID:** `2205`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 27 (col 9–11)
- **Tests completed:** 10
- **Covered by:** Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send an empty response for unsupported MIME types; Response extensions res.redirect(url, status) should send empty body for HEAD requests; Response extensions res.format(obj) should send text by default; Response extensions res.format(obj) should send HTML if specified in "Accepts" header; Response extensions res.format(obj) should throw 406 status when invalid MIME is specified; Response extensions res.format(obj) should call `default` as a function if specified; Response extensions res.format(obj) should return 406 when object has no keys

- **Original (snippet):** `if (fn) obj.default = undefined`

### Survivor 334 — Line 43
- **ID:** `2220`
- **Mutator:** `ArrowFunction`
- **Replacement:** `() => undefined`
- **Location:** Line 43 (col 44–58)
- **Tests completed:** 2
- **Covered by:** Response extensions res.format(obj) should throw 406 status when invalid MIME is specified; Response extensions res.format(obj) should return 406 when object has no keys

- **Original (snippet):** `err.types = normalizeTypes(keys).map((o) => o.value)`

## File: `packages/res/src/redirect.ts`

### Survivor 335 — Line 18
- **ID:** `2292`
- **Mutator:** `StringLiteral`
- **Replacement:** `"Stryker was here!"`
- **Location:** Line 18 (col 16–18)
- **Tests completed:** 5
- **Covered by:** Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send an empty response for unsupported MIME types; Response extensions res.redirect(url, status) should send empty body for HEAD requests

- **Original (snippet):** `let body = ''`

### Survivor 336 — Line 35
- **ID:** `2298`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 35 (col 22–8)
- **Tests completed:** 1
- **Covered by:** Response extensions res.redirect(url, status) should send an empty response for unsupported MIME types

- **Original (snippet):** `default: () => {
        body = ''
      }`

### Survivor 337 — Line 44
- **ID:** `2302`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 44 (col 9–30)
- **Tests completed:** 5
- **Covered by:** Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send an empty response for unsupported MIME types; Response extensions res.redirect(url, status) should send empty body for HEAD requests
- **Nearby killed mutants:** `ConditionalExpression`: terminated; `EqualityOperator`: terminated

- **Original (snippet):** `if (req.method === 'HEAD') res.end()`

### Survivor 338 — Line 44
- **ID:** `2304`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 44 (col 24–30)
- **Tests completed:** 5
- **Covered by:** Response extensions res.redirect(url, status) should set 302 status and message about redirecting; Response extensions res.redirect(url, status) should follow the redirect; Response extensions res.redirect(url, status) should send an HTML link to redirect to; Response extensions res.redirect(url, status) should send an empty response for unsupported MIME types; Response extensions res.redirect(url, status) should send empty body for HEAD requests
- **Nearby killed mutants:** `ConditionalExpression`: terminated; `EqualityOperator`: terminated

- **Original (snippet):** `if (req.method === 'HEAD') res.end()`

## File: `packages/res/src/util.ts`

### Survivor 339 — Line 11
- **ID:** `2307`
- **Mutator:** `Regex`
- **Replacement:** `/ *; /`
- **Location:** Line 11 (col 27–34)
- **Tests completed:** 5
- **Covered by:** util acceptParams parses a string with only a value; util acceptParams parses a string with a q value; util acceptParams parses a string with multiple params; util acceptParams handles an index argument; util normalizeType should return full MIME type as-is when it contains "/"
- **Nearby killed mutants:** `Regex`: expected { …(4) } to deeply equal { value: 'application/json', …(3) }

- **Original (snippet):** `const parts = str.split(/ *; */)`

### Survivor 340 — Line 14
- **ID:** `2309`
- **Mutator:** `MethodExpression`
- **Replacement:** `parts`
- **Location:** Line 14 (col 22–36)
- **Tests completed:** 5
- **Covered by:** util acceptParams parses a string with only a value; util acceptParams parses a string with a q value; util acceptParams parses a string with multiple params; util acceptParams handles an index argument; util normalizeType should return full MIME type as-is when it contains "/"
- **Nearby killed mutants:** `BlockStatement`: expected { value: 'application/json', …(3) } to deeply equal { value: 'applic...

- **Original (snippet):** `for (const part of parts.slice(1)) {`

### Survivor 341 — Line 27
- **ID:** `2321`
- **Mutator:** `ArrayDeclaration`
- **Replacement:** `["Stryker was here"]`
- **Location:** Line 27 (col 33–35)
- **Tests completed:** 2
- **Covered by:** Response extensions res.format(obj) should throw 406 status when invalid MIME is specified; Response extensions res.format(obj) should return 406 when object has no keys

- **Original (snippet):** `const ret: NormalizedType[] = []`

### Survivor 342 — Line 29
- **ID:** `2322`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 29 (col 29–4)
- **Tests completed:** 1
- **Covered by:** Response extensions res.format(obj) should throw 406 status when invalid MIME is specified

- **Original (snippet):** `for (const type of types) {
    ret.push(normalizeType(type))
  }`

### Survivor 343 — Line 51
- **ID:** `2331`
- **Mutator:** `EqualityOperator`
- **Replacement:** `index <= str.length`
- **Location:** Line 51 (col 29–47)
- **Tests completed:** 26
- **Covered by:** util escapeHTML when string contains '"' as only character it should replace with "&quot;"; util escapeHTML when string contains '"' as first character it should replace with "&quot;"; util escapeHTML when string contains '"' as last character should replace with "&quot;"; util escapeHTML when string contains '"' as middle character should replace with "&quot;"; util escapeHTML when string contains '"' multiple times should replace all occurrances with "&quot;"; util escapeHTML when string contains "&" as only character should replace with "&amp;"; util escapeHTML when string contains "&" as first character should replace with "&amp;"; util escapeHTML when string contains "&" as last character should replace with "&amp;"; util escapeHTML when string contains "&" as middle character should replace with "&amp;"; util escapeHTML when string contains "&" multiple times should replace all occurrances with "&amp;"; util escapeHTML when string contains "'" as only character should replace with "&#39;"; util escapeHTML when string contains "'" as first character should replace with "&#39;"; util escapeHTML when string contains "'" as last character should replace with "&#39;"; util escapeHTML when string contains "'" as middle character should replace with "&#39;"; util escapeHTML when string contains "'" multiple times should replace all occurrances with "&#39;"; util escapeHTML when string contains "<" as only character should replace with "&lt;"; util escapeHTML when string contains "<" as first character should replace with "&lt;"; util escapeHTML when string contains "<" as last character should replace with "&lt;"; util escapeHTML when string contains "<" as middle character should replace with "&lt;"; util escapeHTML when string contains "<" multiple times should replace all occurrances with "&lt;"; util escapeHTML when string contains ">" as only character should replace with "&gt;"; util escapeHTML when string contains ">" as first character should replace with "&gt;"; util escapeHTML when string contains ">" as last character should replace with "&gt;"; util escapeHTML when string contains ">" as middle character should replace with "&gt;"; util escapeHTML when string contains ">" multiple times should replace all occurrances with "&gt;"; util escapeHTML when escaped character mixed should escape all occurrances
- **Nearby killed mutants:** `ConditionalExpression`: expected '' to be '&quot;' // Object.is equality; `EqualityOperator`: expected '' to be '&quot;' // Object.is equality; `BlockStatement`: expected '"' to be '&quot;' // Object.is equality

- **Original (snippet):** `for (index = match.index; index < str.length; index++) {`

### Survivor 344 — Line 72
- **ID:** `2346`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 72 (col 9–28)
- **Tests completed:** 26
- **Covered by:** util escapeHTML when string contains '"' as only character it should replace with "&quot;"; util escapeHTML when string contains '"' as first character it should replace with "&quot;"; util escapeHTML when string contains '"' as last character should replace with "&quot;"; util escapeHTML when string contains '"' as middle character should replace with "&quot;"; util escapeHTML when string contains '"' multiple times should replace all occurrances with "&quot;"; util escapeHTML when string contains "&" as only character should replace with "&amp;"; util escapeHTML when string contains "&" as first character should replace with "&amp;"; util escapeHTML when string contains "&" as last character should replace with "&amp;"; util escapeHTML when string contains "&" as middle character should replace with "&amp;"; util escapeHTML when string contains "&" multiple times should replace all occurrances with "&amp;"; util escapeHTML when string contains "'" as only character should replace with "&#39;"; util escapeHTML when string contains "'" as first character should replace with "&#39;"; util escapeHTML when string contains "'" as last character should replace with "&#39;"; util escapeHTML when string contains "'" as middle character should replace with "&#39;"; util escapeHTML when string contains "'" multiple times should replace all occurrances with "&#39;"; util escapeHTML when string contains "<" as only character should replace with "&lt;"; util escapeHTML when string contains "<" as first character should replace with "&lt;"; util escapeHTML when string contains "<" as last character should replace with "&lt;"; util escapeHTML when string contains "<" as middle character should replace with "&lt;"; util escapeHTML when string contains "<" multiple times should replace all occurrances with "&lt;"; util escapeHTML when string contains ">" as only character should replace with "&gt;"; util escapeHTML when string contains ">" as first character should replace with "&gt;"; util escapeHTML when string contains ">" as last character should replace with "&gt;"; util escapeHTML when string contains ">" as middle character should replace with "&gt;"; util escapeHTML when string contains ">" multiple times should replace all occurrances with "&gt;"; util escapeHTML when escaped character mixed should escape all occurrances
- **Nearby killed mutants:** `ConditionalExpression`: expected '&quot;' to be 'foo&quot;' // Object.is equality; `EqualityOperator`: expected '&quot;' to be 'foo&quot;' // Object.is equality; `AssignmentOperator`: expected 'NaN&quot;' to be 'foo&quot;' // Object.is equality; `MethodExpression`: expected 'foo"&quot;' to be 'foo&quot;' // Object.is equality

- **Original (snippet):** `if (lastIndex !== index) html += str.substring(lastIndex, index)`

### Survivor 345 — Line 78
- **ID:** `2353`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 78 (col 10–29)
- **Tests completed:** 26
- **Covered by:** util escapeHTML when string contains '"' as only character it should replace with "&quot;"; util escapeHTML when string contains '"' as first character it should replace with "&quot;"; util escapeHTML when string contains '"' as last character should replace with "&quot;"; util escapeHTML when string contains '"' as middle character should replace with "&quot;"; util escapeHTML when string contains '"' multiple times should replace all occurrances with "&quot;"; util escapeHTML when string contains "&" as only character should replace with "&amp;"; util escapeHTML when string contains "&" as first character should replace with "&amp;"; util escapeHTML when string contains "&" as last character should replace with "&amp;"; util escapeHTML when string contains "&" as middle character should replace with "&amp;"; util escapeHTML when string contains "&" multiple times should replace all occurrances with "&amp;"; util escapeHTML when string contains "'" as only character should replace with "&#39;"; util escapeHTML when string contains "'" as first character should replace with "&#39;"; util escapeHTML when string contains "'" as last character should replace with "&#39;"; util escapeHTML when string contains "'" as middle character should replace with "&#39;"; util escapeHTML when string contains "'" multiple times should replace all occurrances with "&#39;"; util escapeHTML when string contains "<" as only character should replace with "&lt;"; util escapeHTML when string contains "<" as first character should replace with "&lt;"; util escapeHTML when string contains "<" as last character should replace with "&lt;"; util escapeHTML when string contains "<" as middle character should replace with "&lt;"; util escapeHTML when string contains "<" multiple times should replace all occurrances with "&lt;"; util escapeHTML when string contains ">" as only character should replace with "&gt;"; util escapeHTML when string contains ">" as first character should replace with "&gt;"; util escapeHTML when string contains ">" as last character should replace with "&gt;"; util escapeHTML when string contains ">" as middle character should replace with "&gt;"; util escapeHTML when string contains ">" multiple times should replace all occurrances with "&gt;"; util escapeHTML when escaped character mixed should escape all occurrances
- **Nearby killed mutants:** `ConditionalExpression`: expected '&quot;' to be '&quot;bar' // Object.is equality; `EqualityOperator`: expected '&quot;' to be '&quot;bar' // Object.is equality; `ArithmeticOperator`: expected NaN to be '&quot;bar' // Object.is equality; `MethodExpression`: expected '&quot;"bar' to be '&quot;bar' // Object.is equality

- **Original (snippet):** `return lastIndex !== index ? html + str.substring(lastIndex, index) : html`

## File: `packages/router/src/index.ts`

### Survivor 346 — Line 160
- **ID:** `2376`
- **Mutator:** `ArrayDeclaration`
- **Replacement:** `["Stryker was here"]`
- **Location:** Line 160 (col 87–89)
- **Tests completed:** 228
- **Covered by:** Testing App should launch a basic server; Testing App should chain middleware; Testing App Custom onError works; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; HTTP methods HEAD request does not work for undefined handlers; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps sub-app mounts on a specific path; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps sub-app gets mounted via `app.route`; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps should mount app on a specified path; Subapps should mount on "/" if path is not specified; Subapps app.parent should reference to the app it was mounted on; Subapps app.path() should return the mountpath; Subapps app.path() should nest mountpaths; Subapps app.path() should nest multiple mountpaths for a single subapp; Subapps app.path() should nest multiple mountpaths for multiple subapp; Subapps middlewares of a subapp should preserve the path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF; Testing Router .use method new ware gets added via .use; Testing Router .use method accepts a list of wares; Testing Router .use method accepts an array of wares; Testing Router .use method accepts an array of wares as a first argument; Testing Router .use method accepts an array of wares and path as first argument; Testing HTTP methods should accept arrays for first second arg; Testing HTTP methods should accept arrays for third argument; Testing HTTP methods app.get should set GET as HTTP method; Testing HTTP methods app.post should set POST as HTTP method; Testing HTTP methods app.put should set PUT as HTTP method; Testing HTTP methods app.patch should set PATCH as HTTP method; Testing HTTP methods app.delete should set DELETE as HTTP method; Testing HTTP methods app.head should set HEAD as HTTP method; Testing HTTP methods app.options should set OPTIONS as HTTP method; Testing HTTP methods app.acl should set ACL as HTTP method; Testing HTTP methods app.bind should set BIND as HTTP method; Testing HTTP methods app.checkout should set CHECKOUT as HTTP method; Testing HTTP methods app.copy should set COPY as HTTP method; Testing HTTP methods app.lock should set LOCK as HTTP method; Testing HTTP methods app.unlock should set UNLOCK as HTTP method; Testing HTTP methods app.merge should set MERGE as HTTP method; Testing HTTP methods app.mkactivity should set MKACTIVITY as HTTP method; Testing HTTP methods app.mkcol should set MKCOL as HTTP method; Testing HTTP methods app.move should set MOVE as HTTP method; Testing HTTP methods app.search should set SEARCH as HTTP method; Testing HTTP methods app.msearch should set M-SEARCH as HTTP method; Testing HTTP methods app.notify should set NOTIFY as HTTP method; Testing HTTP methods app.purge should set PURGE as HTTP method; Testing HTTP methods app.report should set REPORT as HTTP method; Testing HTTP methods app.subscribe should set SUBSCRIBE as HTTP method; Testing HTTP methods app.unsubscribe should set UNSUBSCRIBE as HTTP method; Testing HTTP methods app.trace should set TRACE as HTTP method; Testing HTTP methods app.connect should set CONNECT as HTTP method; Testing HTTP methods app.unbind should set UNBIND as HTTP method; Testing HTTP methods app.rebind should set REBIND as HTTP method; Testing HTTP methods app.link should set LINK as HTTP method; Testing HTTP methods app.unlink should set UNLINK as HTTP method; Testing HTTP methods app.mkcalendar should set MKCALENDAR as HTTP method; Testing HTTP methods app.propfind should set PROPFIND as HTTP method; Testing HTTP methods app.proppatch should set PROPPATCH as HTTP method; Testing HTTP methods app.source should set SOURCE as HTTP method; Testing HTTP methods app.all should push all HTTP methods handlers; Testing HTTP methods should push a dummy GET HTTP method and its handlers and expect the middleware object to match; Testing HTTP methods should push a dummy GET HTTP method containing the fullPaths array and expect the middleware object to match; Testing HTTP methods app.get with array of paths should set GET as HTTP method; Testing HTTP methods should skip non-string elements in path array; Testing HTTP methods pushMiddleware should use precompiledRegex when provided; Testing HTTP methods normalizeKeys handles regex with false keys (static routes); Testing HTTP methods normalizeKeys converts wildcard * key to wild

- **Original (snippet):** `let waresFromHandlers: ReturnType<typeof createMiddlewareFromRoute<Req, Res>>[] = []`

### Survivor 347 — Line 189
- **ID:** `2406`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 189 (col 56–83)
- **Tests completed:** 217
- **Covered by:** Testing App should launch a basic server; Testing App should chain middleware; Testing App Custom onError works; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; HTTP methods HEAD request does not work for undefined handlers; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps sub-app gets mounted via `app.route`; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps middlewares of a subapp should preserve the path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF; Testing Router .use method new ware gets added via .use; Testing Router .use method accepts a list of wares; Testing Router .use method accepts an array of wares; Testing Router .use method accepts an array of wares as a first argument; Testing Router .use method accepts an array of wares and path as first argument; Testing HTTP methods should accept arrays for first second arg; Testing HTTP methods should accept arrays for third argument; Testing HTTP methods app.get should set GET as HTTP method; Testing HTTP methods app.post should set POST as HTTP method; Testing HTTP methods app.put should set PUT as HTTP method; Testing HTTP methods app.patch should set PATCH as HTTP method; Testing HTTP methods app.delete should set DELETE as HTTP method; Testing HTTP methods app.head should set HEAD as HTTP method; Testing HTTP methods app.options should set OPTIONS as HTTP method; Testing HTTP methods app.acl should set ACL as HTTP method; Testing HTTP methods app.bind should set BIND as HTTP method; Testing HTTP methods app.checkout should set CHECKOUT as HTTP method; Testing HTTP methods app.copy should set COPY as HTTP method; Testing HTTP methods app.lock should set LOCK as HTTP method; Testing HTTP methods app.unlock should set UNLOCK as HTTP method; Testing HTTP methods app.merge should set MERGE as HTTP method; Testing HTTP methods app.mkactivity should set MKACTIVITY as HTTP method; Testing HTTP methods app.mkcol should set MKCOL as HTTP method; Testing HTTP methods app.move should set MOVE as HTTP method; Testing HTTP methods app.search should set SEARCH as HTTP method; Testing HTTP methods app.msearch should set M-SEARCH as HTTP method; Testing HTTP methods app.notify should set NOTIFY as HTTP method; Testing HTTP methods app.purge should set PURGE as HTTP method; Testing HTTP methods app.report should set REPORT as HTTP method; Testing HTTP methods app.subscribe should set SUBSCRIBE as HTTP method; Testing HTTP methods app.unsubscribe should set UNSUBSCRIBE as HTTP method; Testing HTTP methods app.trace should set TRACE as HTTP method; Testing HTTP methods app.connect should set CONNECT as HTTP method; Testing HTTP methods app.unbind should set UNBIND as HTTP method; Testing HTTP methods app.rebind should set REBIND as HTTP method; Testing HTTP methods app.link should set LINK as HTTP method; Testing HTTP methods app.unlink should set UNLINK as HTTP method; Testing HTTP methods app.mkcalendar should set MKCALENDAR as HTTP method; Testing HTTP methods app.propfind should set PROPFIND as HTTP method; Testing HTTP methods app.proppatch should set PROPPATCH as HTTP method; Testing HTTP methods app.source should set SOURCE as HTTP method; Testing HTTP methods app.all should push all HTTP methods handlers; Testing HTTP methods should push a dummy GET HTTP method and its handlers and expect the middleware object to match; Testing HTTP methods should push a dummy GET HTTP method containing the fullPaths array and expect the middleware object to match; Testing HTTP methods app.get with array of paths should set GET as HTTP method; Testing HTTP methods should skip non-string elements in path array
- **Nearby killed mutants:** `LogicalOperator`: expected { keys: [ 'id' ], …(1) } to deeply equal { keys: [ 'custom' ], …(1) }; `ConditionalExpression`: Request "GET /" should have status code 200 but was 404 (body was: Not Found)...; `EqualityOperator`: Request "GET /" should have status code 200 but was 404 (body was: Not Found)...; `StringLiteral`: Request "GET /" should have status code 200 but was 404 (body was: Not Found)...

- **Original (snippet):** `const regex = normalizeKeys(precompiledRegex ?? (typeof mdwPath === 'string' ? rg(mdwPath, isMw) : undefined))`

### Survivor 348 — Line 200
- **ID:** `2419`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 200 (col 15–18)
- **Tests completed:** 250
- **Covered by:** Testing App should launch a basic server; Testing App should chain middleware; Testing App app.locals are get and set; Testing App Custom noMatchHandler works; Testing App Custom onError works; Testing App App works with HTTP 1.1; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should throw 404 on no routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods `app.set` sets a setting; App methods app.enable enables a setting; App methods app.disable disables a setting; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; HTTP methods HEAD request does not work for undefined handlers; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps sub-app mounts on a specific path; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps sub-app gets mounted via `app.route`; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps should mount app on a specified path; Subapps should mount on "/" if path is not specified; Subapps app.parent should reference to the app it was mounted on; Subapps app.path() should return the mountpath; Subapps app.path() should nest mountpaths; Subapps app.path() should nest multiple mountpaths for a single subapp; Subapps app.path() should nest multiple mountpaths for multiple subapp; Subapps middlewares of a subapp should preserve the path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.engine registers a new engine; Template engines app.engine appends a dot if not passed; Template engines app.render should support absolute paths; Template engines app.render should expose app.locals; Template engines app.render should support index files; Template engines app.render should work without a callback; Template engines app.render should use view cache in production mode; Template engines app.render should handle view engine with leading dot; Template engines app.render errors should catch errors; Template engines app.render errors when the file does not exist should provide a helpful error; Template engines app.render errors when error occurs should trigger a callback; Template engines app.render multiple roots should lookup the file in paths; Template engines app.render multiple roots should look until the file is found; Template engines app.render multiple roots should error if could not find the file; Template engines app.render supports custom View; Template engines app.render caching should always lookup view without cache; Template engines app.render caching should cache with "view cache" setting; Template engines app.render caching should respect explicit cache option passed to render(); Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy is enabled by default; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF; Testing Router Basic new router has empty ware array; Testing Router .use method new ware gets added via .use; Testing Router .use method accepts a list of wares; Testing Router .use method accepts an array of wares; Testing Router .use method accepts an array of wares as a first argument; Testing Router .use method accepts an array of wares and path as first argument; Testing HTTP methods should accept arrays for first second arg; Testing HTTP methods should accept arrays for third argument; Testing HTTP methods app.get should set GET as HTTP method; Testing HTTP methods app.post should set POST as HTTP method; Testing HTTP methods app.put should set PUT as HTTP method; Testing HTTP methods app.patch should set PATCH as HTTP method; Testing HTTP methods app.delete should set DELETE as HTTP method; Testing HTTP methods app.head should set HEAD as HTTP method; Testing HTTP methods app.options should set OPTIONS as HTTP method; Testing HTTP methods app.acl should set ACL as HTTP method; Testing HTTP methods app.bind should set BIND as HTTP method; Testing HTTP methods app.checkout should set CHECKOUT as HTTP method; Testing HTTP methods app.copy should set COPY as HTTP method; Testing HTTP methods app.lock should set LOCK as HTTP method; Testing HTTP methods app.unlock should set UNLOCK as HTTP method; Testing HTTP methods app.merge should set MERGE as HTTP method; Testing HTTP methods app.mkactivity should set MKACTIVITY as HTTP method; Testing HTTP methods app.mkcol should set MKCOL as HTTP method; Testing HTTP methods app.move should set MOVE as HTTP method; Testing HTTP methods app.search should set SEARCH as HTTP method; Testing HTTP methods app.msearch should set M-SEARCH as HTTP method; Testing HTTP methods app.notify should set NOTIFY as HTTP method; Testing HTTP methods app.purge should set PURGE as HTTP method; Testing HTTP methods app.report should set REPORT as HTTP method; Testing HTTP methods app.subscribe should set SUBSCRIBE as HTTP method; Testing HTTP methods app.unsubscribe should set UNSUBSCRIBE as HTTP method; Testing HTTP methods app.trace should set TRACE as HTTP method; Testing HTTP methods app.connect should set CONNECT as HTTP method; Testing HTTP methods app.unbind should set UNBIND as HTTP method; Testing HTTP methods app.rebind should set REBIND as HTTP method; Testing HTTP methods app.link should set LINK as HTTP method; Testing HTTP methods app.unlink should set UNLINK as HTTP method; Testing HTTP methods app.mkcalendar should set MKCALENDAR as HTTP method; Testing HTTP methods app.propfind should set PROPFIND as HTTP method; Testing HTTP methods app.proppatch should set PROPPATCH as HTTP method; Testing HTTP methods app.source should set SOURCE as HTTP method; Testing HTTP methods app.all should push all HTTP methods handlers; Testing HTTP methods app.get with array of paths should set GET as HTTP method; Testing HTTP methods should skip non-string elements in path array

- **Original (snippet):** `mountpath = '/'`

### Survivor 349 — Line 256
- **ID:** `2436`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 256 (col 21–28)
- **Tests completed:** 3
- **Covered by:** Route handlers should accept array of paths; Testing HTTP methods app.get with array of paths should set GET as HTTP method; Testing HTTP methods should skip non-string elements in path array

- **Original (snippet):** `type: 'route'`

### Survivor 350 — Line 266
- **ID:** `2440`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 266 (col 17–24)
- **Tests completed:** 134
- **Covered by:** Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing "*" should catch all undefined routes; Testing App routing should can set url prefix for the application; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; HTTP methods HEAD request does not work for undefined handlers; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app paths get prefixed with the mount path; Subapps sub-app gets mounted via `app.route`; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should handle empty sub-app with no middleware; Subapps should handle HEAD request reaching fallback handler; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should reject request when the :authority header disagrees with the host header; Request properties Network extensions should not crash app when host header is malformed; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should throw error when x-forwarded-host has malformed port; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; Testing HTTP methods should accept arrays for first second arg; Testing HTTP methods should accept arrays for third argument; Testing HTTP methods app.get should set GET as HTTP method; Testing HTTP methods app.post should set POST as HTTP method; Testing HTTP methods app.put should set PUT as HTTP method; Testing HTTP methods app.patch should set PATCH as HTTP method; Testing HTTP methods app.delete should set DELETE as HTTP method; Testing HTTP methods app.head should set HEAD as HTTP method; Testing HTTP methods app.options should set OPTIONS as HTTP method; Testing HTTP methods app.acl should set ACL as HTTP method; Testing HTTP methods app.bind should set BIND as HTTP method; Testing HTTP methods app.checkout should set CHECKOUT as HTTP method; Testing HTTP methods app.copy should set COPY as HTTP method; Testing HTTP methods app.lock should set LOCK as HTTP method; Testing HTTP methods app.unlock should set UNLOCK as HTTP method; Testing HTTP methods app.merge should set MERGE as HTTP method; Testing HTTP methods app.mkactivity should set MKACTIVITY as HTTP method; Testing HTTP methods app.mkcol should set MKCOL as HTTP method; Testing HTTP methods app.move should set MOVE as HTTP method; Testing HTTP methods app.search should set SEARCH as HTTP method; Testing HTTP methods app.notify should set NOTIFY as HTTP method; Testing HTTP methods app.purge should set PURGE as HTTP method; Testing HTTP methods app.report should set REPORT as HTTP method; Testing HTTP methods app.subscribe should set SUBSCRIBE as HTTP method; Testing HTTP methods app.unsubscribe should set UNSUBSCRIBE as HTTP method; Testing HTTP methods app.trace should set TRACE as HTTP method; Testing HTTP methods app.connect should set CONNECT as HTTP method; Testing HTTP methods app.unbind should set UNBIND as HTTP method; Testing HTTP methods app.rebind should set REBIND as HTTP method; Testing HTTP methods app.link should set LINK as HTTP method; Testing HTTP methods app.unlink should set UNLINK as HTTP method; Testing HTTP methods app.mkcalendar should set MKCALENDAR as HTTP method; Testing HTTP methods app.propfind should set PROPFIND as HTTP method; Testing HTTP methods app.proppatch should set PROPPATCH as HTTP method; Testing HTTP methods app.source should set SOURCE as HTTP method

- **Original (snippet):** `type: 'route'`

### Survivor 351 — Line 280
- **ID:** `2443`
- **Mutator:** `MethodExpression`
- **Replacement:** `handlers`
- **Location:** Line 280 (col 17–34)
- **Tests completed:** 1
- **Covered by:** Testing HTTP methods app.msearch should set M-SEARCH as HTTP method

- **Original (snippet):** `handlers: handlers.slice(1),`

### Survivor 352 — Line 282
- **ID:** `2445`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 282 (col 13–20)
- **Tests completed:** 1
- **Covered by:** Testing HTTP methods app.msearch should set M-SEARCH as HTTP method

- **Original (snippet):** `type: 'route'`

### Survivor 353 — Line 294
- **ID:** `2448`
- **Mutator:** `MethodExpression`
- **Replacement:** `handlers`
- **Location:** Line 294 (col 17–34)
- **Tests completed:** 4
- **Covered by:** Testing App routing "*" should catch all undefined routes; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Testing HTTP methods app.all should push all HTTP methods handlers

- **Original (snippet):** `handlers: handlers.slice(1),`

### Survivor 354 — Line 314
- **ID:** `2458`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 314 (col 15–19)
- **Tests completed:** 1
- **Covered by:** Testing Router .use method accepts an array of wares and path as first argument

- **Original (snippet):** `type: 'mw'`

## File: `packages/send/src/send.ts`

### Survivor 355 — Line 25
- **ID:** `2497`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 25 (col 32–6)
- **Tests completed:** 3
- **Covered by:** send(body) should send a buffer; send(body) should preserve Content-Type when sending buffer with Content-Type already set; send(body) should set Content-Type to application/octet-stream for buffers if the header hasn't been set before
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /?param1=val1&param2=val2" should have status code 200 but was 5...; `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `if (Buffer.isBuffer(body)) {
      bodyToSend = body
    } else if (typeof body === 'object' && body !== null) {`

### Survivor 356 — Line 27
- **ID:** `2504`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 27 (col 44–57)
- **Tests completed:** 11
- **Covered by:** send(body) should send a JSON response; send(body) should send nothing if body is empty; Response methods res.send falls back to res.json when sending objects; Response methods res.send sets proper headers; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /abc/def" should have expected body
+ actual - expected

  {
+  ...; `ConditionalExpression`: Request "GET /?param1=val1&param2=val2" should have status code 200 but was 5...; `LogicalOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `ConditionalExpression`: Request "GET /abc/def" should have expected body
+ actual - expected

  {
+  ...; `EqualityOperator`: Request "GET /?param1=val1&param2=val2" should have status code 200 but was 5...

- **Original (snippet):** `} else if (typeof body === 'object' && body !== null) {`

### Survivor 357 — Line 30
- **ID:** `2507`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 30 (col 16–40)
- **Tests completed:** 119
- **Covered by:** Testing App should launch a basic server; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; send(body) should send a plain text; send(body) should set HTML content-type header when sending plain text; send(body) should generate an eTag on a plain text response; send(body) should handle non-string body that needs toString conversion; send(body) should send nothing on a HEAD request; send(body) should send nothing if body is empty; send(body) should remove some headers for 204 status; send(body) should remove some headers for 304 status; send(body) should set 304 status for fresh requests; sendStatus(status) should send "I'm a teapot" when argument is 418; sendStatus(status) should send stringified status code for unsupported status codes; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Response methods res.send sends plain text data; Response methods res.sendStatus sends status + text; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties URL extensions req.url does not include the mount path; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties req.xhr is false because of node-superagent; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have correct header Content-Type"
+ actual - expected
...; `EqualityOperator`: Request "GET /" should have correct header Content-Type"
+ actual - expected
...; `StringLiteral`: Request "GET /" should have correct header Content-Type"
+ actual - expected
...; `BlockStatement`: Request "GET /" should have correct header Content-Type"
+ actual - expected
...

- **Original (snippet):** `} else if (typeof body === 'string') {`

### Survivor 358 — Line 34
- **ID:** `2515`
- **Mutator:** `LogicalOperator`
- **Replacement:** `type || typeof type === 'string'`
- **Location:** Line 34 (col 11–43)
- **Tests completed:** 117
- **Covered by:** Testing App should launch a basic server; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; send(body) should send a plain text; send(body) should set HTML content-type header when sending plain text; send(body) should generate an eTag on a plain text response; send(body) should send nothing on a HEAD request; send(body) should remove some headers for 204 status; send(body) should remove some headers for 304 status; send(body) should set 304 status for fresh requests; sendStatus(status) should send "I'm a teapot" when argument is 418; sendStatus(status) should send stringified status code for unsupported status codes; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Response methods res.send sends plain text data; Response methods res.sendStatus sends status + text; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties URL extensions req.url does not include the mount path; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties req.xhr is false because of node-superagent; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `ConditionalExpression`: Request "GET /" should have correct header Content-Type"
+ actual - expected
...; `EqualityOperator`: Request "GET /" should have correct header Content-Type"
+ actual - expected
...; `StringLiteral`: Request "GET /" should have correct header Content-Type"
+ actual - expected
...

- **Original (snippet):** `if (type && typeof type === 'string') {`

### Survivor 359 — Line 34
- **ID:** `2516`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 34 (col 19–43)
- **Tests completed:** 8
- **Covered by:** Subapps sends bad request on malformed params; sendStatus(status) should send "I'm a teapot" when argument is 418; sendStatus(status) should send stringified status code for unsupported status codes; Response methods res.sendStatus sends status + text; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `ConditionalExpression`: Request "GET /" should have correct header Content-Type"
+ actual - expected
...; `EqualityOperator`: Request "GET /" should have correct header Content-Type"
+ actual - expected
...; `StringLiteral`: Request "GET /" should have correct header Content-Type"
+ actual - expected
...

- **Original (snippet):** `if (type && typeof type === 'string') {`

### Survivor 360 — Line 34
- **ID:** `2519`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 34 (col 45–8)
- **Tests completed:** 8
- **Covered by:** Subapps sends bad request on malformed params; sendStatus(status) should send "I'm a teapot" when argument is 418; sendStatus(status) should send stringified status code for unsupported status codes; Response methods res.sendStatus sends status + text; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `ConditionalExpression`: Request "GET /" should have correct header Content-Type"
+ actual - expected
...; `EqualityOperator`: Request "GET /" should have correct header Content-Type"
+ actual - expected
...; `StringLiteral`: Request "GET /" should have correct header Content-Type"
+ actual - expected
...

- **Original (snippet):** `if (type && typeof type === 'string') {
        res.setHeader('Content-Type', setCharset(type, 'utf-8'))
      } else res.setHeader('Content-Type', setCharset('text/html', 'utf-8'))`

### Survivor 361 — Line 40
- **ID:** `2525`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 40 (col 42–48)
- **Tests completed:** 132
- **Covered by:** Testing App should launch a basic server; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; send(body) should send a plain text; send(body) should set HTML content-type header when sending plain text; send(body) should generate an eTag on a plain text response; send(body) should send a JSON response; send(body) should send a buffer; send(body) should preserve Content-Type when sending buffer with Content-Type already set; send(body) should handle non-string body that needs toString conversion; send(body) should send nothing on a HEAD request; send(body) should send nothing if body is empty; send(body) should remove some headers for 204 status; send(body) should remove some headers for 304 status; send(body) should set Content-Type to application/octet-stream for buffers if the header hasn't been set before; send(body) should set 304 status for fresh requests; sendStatus(status) should send "I'm a teapot" when argument is 418; sendStatus(status) should send stringified status code for unsupported status codes; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.sendStatus sends status + text; Response methods res.send sets proper headers; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties req.xhr is false because of node-superagent; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF

- **Original (snippet):** `const encoding: 'utf8' | undefined = 'utf8'`

### Survivor 362 — Line 55
- **ID:** `2546`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 55 (col 24–40)
- **Tests completed:** 4
- **Covered by:** send(body) should remove some headers for 204 status; send(body) should remove some headers for 304 status; send(body) should set 304 status for fresh requests; Request properties req.fresh and req.stale get set

- **Original (snippet):** `res.removeHeader('Content-Length')`

### Survivor 363 — Line 56
- **ID:** `2547`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 56 (col 24–43)
- **Tests completed:** 4
- **Covered by:** send(body) should remove some headers for 204 status; send(body) should remove some headers for 304 status; send(body) should set 304 status for fresh requests; Request properties req.fresh and req.stale get set

- **Original (snippet):** `res.removeHeader('Transfer-Encoding')`

### Survivor 364 — Line 57
- **ID:** `2548`
- **Mutator:** `StringLiteral`
- **Replacement:** `"Stryker was here!"`
- **Location:** Line 57 (col 20–22)
- **Tests completed:** 4
- **Covered by:** send(body) should remove some headers for 204 status; send(body) should remove some headers for 304 status; send(body) should set 304 status for fresh requests; Request properties req.fresh and req.stale get set

- **Original (snippet):** `bodyToSend = ''`

### Survivor 365 — Line 60
- **ID:** `2550`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 60 (col 9–30)
- **Tests completed:** 132
- **Covered by:** Testing App should launch a basic server; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; send(body) should send a plain text; send(body) should set HTML content-type header when sending plain text; send(body) should generate an eTag on a plain text response; send(body) should send a JSON response; send(body) should send a buffer; send(body) should preserve Content-Type when sending buffer with Content-Type already set; send(body) should handle non-string body that needs toString conversion; send(body) should send nothing on a HEAD request; send(body) should send nothing if body is empty; send(body) should remove some headers for 204 status; send(body) should remove some headers for 304 status; send(body) should set Content-Type to application/octet-stream for buffers if the header hasn't been set before; send(body) should set 304 status for fresh requests; sendStatus(status) should send "I'm a teapot" when argument is 418; sendStatus(status) should send stringified status code for unsupported status codes; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.sendStatus sends status + text; Response methods res.send sets proper headers; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties req.xhr is false because of node-superagent; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `if (req.method === 'HEAD') {`

### Survivor 366 — Line 60
- **ID:** `2552`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 60 (col 24–30)
- **Tests completed:** 132
- **Covered by:** Testing App should launch a basic server; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; send(body) should send a plain text; send(body) should set HTML content-type header when sending plain text; send(body) should generate an eTag on a plain text response; send(body) should send a JSON response; send(body) should send a buffer; send(body) should preserve Content-Type when sending buffer with Content-Type already set; send(body) should handle non-string body that needs toString conversion; send(body) should send nothing on a HEAD request; send(body) should send nothing if body is empty; send(body) should remove some headers for 204 status; send(body) should remove some headers for 304 status; send(body) should set Content-Type to application/octet-stream for buffers if the header hasn't been set before; send(body) should set 304 status for fresh requests; sendStatus(status) should send "I'm a teapot" when argument is 418; sendStatus(status) should send stringified status code for unsupported status codes; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.sendStatus sends status + text; Response methods res.send sets proper headers; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties req.xhr is false because of node-superagent; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `if (req.method === 'HEAD') {`

### Survivor 367 — Line 60
- **ID:** `2553`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 60 (col 32–6)
- **Tests completed:** 5
- **Covered by:** HTTP methods app.head handles head request; HTTP methods HEAD request works when any of the method handlers are defined; Subapps should handle HEAD requests to sub-app routes; Subapps should handle HEAD request reaching fallback handler; send(body) should send nothing on a HEAD request
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...; `EqualityOperator`: Request "GET /" should have expected body
+ actual - expected

  {
+   body: ...

- **Original (snippet):** `if (req.method === 'HEAD') {
      res.end('')
      return res
    }`

### Survivor 368 — Line 61
- **ID:** `2554`
- **Mutator:** `StringLiteral`
- **Replacement:** `"Stryker was here!"`
- **Location:** Line 61 (col 15–17)
- **Tests completed:** 5
- **Covered by:** HTTP methods app.head handles head request; HTTP methods HEAD request works when any of the method handlers are defined; Subapps should handle HEAD requests to sub-app routes; Subapps should handle HEAD request reaching fallback handler; send(body) should send nothing on a HEAD request

- **Original (snippet):** `res.end('')`

### Survivor 369 — Line 66
- **ID:** `2561`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 66 (col 11–23)
- **Tests completed:** 14
- **Covered by:** send(body) should send a JSON response; send(body) should send a buffer; send(body) should preserve Content-Type when sending buffer with Content-Type already set; send(body) should send nothing if body is empty; send(body) should set Content-Type to application/octet-stream for buffers if the header hasn't been set before; Response methods res.send falls back to res.json when sending objects; Response methods res.send sets proper headers; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /?param1=val1&param2=val2" should have JSON body but body could ...; `EqualityOperator`: Request "GET /" should have JSON body but body could not be parsed: SyntaxErr...

- **Original (snippet):** `if (body == null) {`

### Survivor 370 — Line 66
- **ID:** `2563`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 66 (col 25–8)
- **Tests completed:** 1
- **Covered by:** send(body) should send nothing if body is empty
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /?param1=val1&param2=val2" should have JSON body but body could ...; `EqualityOperator`: Request "GET /" should have JSON body but body could not be parsed: SyntaxErr...

- **Original (snippet):** `if (body == null) {
        res.end('')
        return res
      }`

### Survivor 371 — Line 75
- **ID:** `2575`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 75 (col 11–41)
- **Tests completed:** 113
- **Covered by:** Testing App should launch a basic server; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; send(body) should send a plain text; send(body) should set HTML content-type header when sending plain text; send(body) should generate an eTag on a plain text response; send(body) should handle non-string body that needs toString conversion; send(body) should remove some headers for 204 status; send(body) should remove some headers for 304 status; send(body) should set 304 status for fresh requests; sendStatus(status) should send "I'm a teapot" when argument is 418; sendStatus(status) should send stringified status code for unsupported status codes; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Response methods res.send sends plain text data; Response methods res.sendStatus sends status + text; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties URL extensions req.url does not include the mount path; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties req.xhr is false because of node-superagent; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `EqualityOperator`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...

- **Original (snippet):** `if (typeof bodyToSend !== 'string') bodyToSend = bodyToSend.toString()`

### Survivor 372 — Line 75
- **ID:** `2578`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 75 (col 33–41)
- **Tests completed:** 113
- **Covered by:** Testing App should launch a basic server; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; send(body) should send a plain text; send(body) should set HTML content-type header when sending plain text; send(body) should generate an eTag on a plain text response; send(body) should handle non-string body that needs toString conversion; send(body) should remove some headers for 204 status; send(body) should remove some headers for 304 status; send(body) should set 304 status for fresh requests; sendStatus(status) should send "I'm a teapot" when argument is 418; sendStatus(status) should send stringified status code for unsupported status codes; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Response methods res.send sends plain text data; Response methods res.sendStatus sends status + text; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties URL extensions req.url does not include the mount path; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties req.xhr is false because of node-superagent; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ConditionalExpression`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `EqualityOperator`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...

- **Original (snippet):** `if (typeof bodyToSend !== 'string') bodyToSend = bodyToSend.toString()`

## File: `packages/send/src/sendFile.ts`

### Survivor 373 — Line 87
- **ID:** `2637`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 87 (col 11–30)
- **Tests completed:** 3
- **Covered by:** sendFile(path) should support Range header; sendFile(path) should send 419 if out of range; sendFile(path) should handle Range header with only start position
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have status code 206 but was 416 (body was: )
+ actual...; `ConditionalExpression`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `LogicalOperator`: Body is unusable: Body has already been read; `EqualityOperator`: Request "GET /" should have status code 206 but was 416 (body was: )
+ actual...; `ConditionalExpression`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...

- **Original (snippet):** `if (start >= stats.size || end >= stats.size) {`

### Survivor 374 — Line 87
- **ID:** `2638`
- **Mutator:** `EqualityOperator`
- **Replacement:** `start > stats.size`
- **Location:** Line 87 (col 11–30)
- **Tests completed:** 3
- **Covered by:** sendFile(path) should support Range header; sendFile(path) should send 419 if out of range; sendFile(path) should handle Range header with only start position
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have status code 206 but was 416 (body was: )
+ actual...; `ConditionalExpression`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `LogicalOperator`: Body is unusable: Body has already been read; `EqualityOperator`: Request "GET /" should have status code 206 but was 416 (body was: )
+ actual...; `ConditionalExpression`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...

- **Original (snippet):** `if (start >= stats.size || end >= stats.size) {`

### Survivor 375 — Line 87
- **ID:** `2641`
- **Mutator:** `EqualityOperator`
- **Replacement:** `end > stats.size`
- **Location:** Line 87 (col 34–51)
- **Tests completed:** 3
- **Covered by:** sendFile(path) should support Range header; sendFile(path) should send 419 if out of range; sendFile(path) should handle Range header with only start position
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /" should have status code 206 but was 416 (body was: )
+ actual...; `ConditionalExpression`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `LogicalOperator`: Body is unusable: Body has already been read; `EqualityOperator`: Request "GET /" should have status code 206 but was 416 (body was: )
+ actual...; `ConditionalExpression`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...

- **Original (snippet):** `if (start >= stats.size || end >= stats.size) {`

### Survivor 376 — Line 98
- **ID:** `2653`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 98 (col 12–6)
- **Tests completed:** 22
- **Covered by:** sendFile(path) should send the file; sendFile(path) should set the Content-Type header based on the filename; sendFile(path) should inherit the previously set Content-Type header; sendFile(path) should allow custom headers through the options param; sendFile(path) should set default encoding to UTF-8; sendFile(path) should inherit the previously set status code; sendFile(path) should default to status 200 when statusCode is falsy; sendFile(path) should enable cache headers; sendFile(path) should mark cache is "must-revalidate" if maxAge is 0; sendFile(path) should set cache control with maxAge=0 and immutable=false; sendFile(path) should set cache header with just maxAge when not immutable and not 0; sendFile(path) should not set Cache-Control header when no caching options provided; sendFile(path) should not set Cache-Control header when caching is empty object; sendFile(path) should call callback on successful stream completion; Response extensions res.download(filename) should set Content-Disposition based on path; Response extensions res.download(filename) should set Content-Disposition based on filename; Response extensions res.download(filename) should pass the error to a callback; Response extensions res.download(filename) should set "root" from options; Response extensions res.download(filename) 'should pass options to sendFile's ReadStream'; Response extensions res.download(filename) should set headers from options; Response extensions res.download(filename) should ignore Content-Disposition header in options (case-insensitive); Response extensions res.download(filename) should work without a callback

- **Original (snippet):** `} else {
      headers['Content-Length'] = stats.size.toString()
    }`

### Survivor 377 — Line 108
- **ID:** `2658`
- **Mutator:** `ArrowFunction`
- **Replacement:** `() => undefined`
- **Location:** Line 108 (col 32–48)
- **Tests completed:** 9
- **Covered by:** sendFile(path) should call callback on successful stream completion; Response extensions res.download(filename) should set Content-Disposition based on path; Response extensions res.download(filename) should set Content-Disposition based on filename; Response extensions res.download(filename) should pass the error to a callback; Response extensions res.download(filename) should set "root" from options; Response extensions res.download(filename) 'should pass options to sendFile's ReadStream'; Response extensions res.download(filename) should set headers from options; Response extensions res.download(filename) should ignore Content-Disposition header in options (case-insensitive); Response extensions res.download(filename) should work without a callback
- **Nearby killed mutants:** `ConditionalExpression`: expected false to be true // Object.is equality; `StringLiteral`: expected false to be true // Object.is equality; `ArrowFunction`: expected false to be true // Object.is equality

- **Original (snippet):** `if (cb) stream.on('error', (err) => cb(err)).on('end', () => cb())`

## File: `packages/send/src/sendStatus.ts`

### Survivor 378 — Line 24
- **ID:** `2667`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 24 (col 35–47)
- **Tests completed:** 4
- **Covered by:** Subapps sends bad request on malformed params; sendStatus(status) should send "I'm a teapot" when argument is 418; sendStatus(status) should send stringified status code for unsupported status codes; Response methods res.sendStatus sends status + text
- **Nearby killed mutants:** `StringLiteral`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...

- **Original (snippet):** `res.setHeader('Content-Type', 'text/plain')`

## File: `packages/send/src/utils.ts`

### Survivor 379 — Line 6
- **ID:** `2671`
- **Mutator:** `BooleanLiteral`
- **Replacement:** `Buffer.isBuffer(body)`
- **Location:** Line 6 (col 39–61)
- **Tests completed:** 128
- **Covered by:** Testing App should launch a basic server; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; send(body) should send a plain text; send(body) should set HTML content-type header when sending plain text; send(body) should generate an eTag on a plain text response; send(body) should send a JSON response; send(body) should send a buffer; send(body) should preserve Content-Type when sending buffer with Content-Type already set; send(body) should send nothing on a HEAD request; send(body) should remove some headers for 204 status; send(body) should remove some headers for 304 status; send(body) should set Content-Type to application/octet-stream for buffers if the header hasn't been set before; sendStatus(status) should send "I'm a teapot" when argument is 418; sendStatus(status) should send stringified status code for unsupported status codes; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.sendStatus sends status + text; Response methods res.send sets proper headers; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties req.xhr is false because of node-superagent; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF
- **Nearby killed mutants:** `ObjectLiteral`: Request "GET /" should have correct header etag"
+ actual - expected

  {
   ...

- **Original (snippet):** `eTag(body instanceof Stats ? body : !Buffer.isBuffer(body) ? Buffer.from(body, encoding) : body, {`

## File: `packages/type-is/src/index.ts`

### Survivor 380 — Line 13
- **ID:** `2679`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 13 (col 7–13)
- **Tests completed:** 18
- **Covered by:** Request extensions req.is should return the given MIME type when matching; Request extensions req.is should return false when not matching; Request extensions req.is should return false when Content-Type header is not present; Request extensions req.is Should lookup the MIME type with the extension given (e.g. req.is('json'); Request extensions req.is should ignore charset; typeIs should return false when value is falsy; typeIs should return value if types are empty; typeIs shouldn't depend on case; typeIs should return value if matched type starts with plus; typeIs should return false if there is no match; typeIs should return matched value for urlencoded shorthand; typeIs should return false if types are not strings; typeIs should return false if expected type has wrong format; typeIs should return false if the input is not a string; typeIs should return the same type as input if the type is not normalized
- **Nearby killed mutants:** `BooleanLiteral`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `ConditionalExpression`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...

- **Original (snippet):** `if (!value) return null`

### Survivor 381 — Line 17
- **ID:** `2681`
- **Mutator:** `BlockStatement`
- **Replacement:** `{}`
- **Location:** Line 17 (col 11–4)
- **Tests completed:** 1
- **Covered by:** typeIs should return false if the input is not a string

- **Original (snippet):** `} catch {
    return null
  }`

### Survivor 382 — Line 31
- **ID:** `2691`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 31 (col 7–61)
- **Tests completed:** 13
- **Covered by:** Request extensions req.is should return the given MIME type when matching; Request extensions req.is should return false when not matching; Request extensions req.is Should lookup the MIME type with the extension given (e.g. req.is('json'); Request extensions req.is should ignore charset; typeIs should return value if types are empty; typeIs should return value if matched type starts with plus; typeIs should return false if there is no match; typeIs should return matched value for urlencoded shorthand; typeIs should return false if expected type has wrong format; typeIs should return the same type as input if the type is not normalized
- **Nearby killed mutants:** `ConditionalExpression`: expected false to be 'application/json' // Object.is equality; `EqualityOperator`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `EqualityOperator`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `BooleanLiteral`: expected 'application/javascript/wrong' to be false // Object.is equality

- **Original (snippet):** `if (actualParts.length !== 2 || expectedParts.length !== 2) return false`

### Survivor 383 — Line 31
- **ID:** `2692`
- **Mutator:** `LogicalOperator`
- **Replacement:** `actualParts.length !== 2 && expectedParts.length !== 2`
- **Location:** Line 31 (col 7–61)
- **Tests completed:** 13
- **Covered by:** Request extensions req.is should return the given MIME type when matching; Request extensions req.is should return false when not matching; Request extensions req.is Should lookup the MIME type with the extension given (e.g. req.is('json'); Request extensions req.is should ignore charset; typeIs should return value if types are empty; typeIs should return value if matched type starts with plus; typeIs should return false if there is no match; typeIs should return matched value for urlencoded shorthand; typeIs should return false if expected type has wrong format; typeIs should return the same type as input if the type is not normalized
- **Nearby killed mutants:** `ConditionalExpression`: expected false to be 'application/json' // Object.is equality; `EqualityOperator`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `EqualityOperator`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `BooleanLiteral`: expected 'application/javascript/wrong' to be false // Object.is equality

- **Original (snippet):** `if (actualParts.length !== 2 || expectedParts.length !== 2) return false`

### Survivor 384 — Line 31
- **ID:** `2693`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 31 (col 7–31)
- **Tests completed:** 13
- **Covered by:** Request extensions req.is should return the given MIME type when matching; Request extensions req.is should return false when not matching; Request extensions req.is Should lookup the MIME type with the extension given (e.g. req.is('json'); Request extensions req.is should ignore charset; typeIs should return value if types are empty; typeIs should return value if matched type starts with plus; typeIs should return false if there is no match; typeIs should return matched value for urlencoded shorthand; typeIs should return false if expected type has wrong format; typeIs should return the same type as input if the type is not normalized
- **Nearby killed mutants:** `ConditionalExpression`: expected false to be 'application/json' // Object.is equality; `EqualityOperator`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `EqualityOperator`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `BooleanLiteral`: expected 'application/javascript/wrong' to be false // Object.is equality

- **Original (snippet):** `if (actualParts.length !== 2 || expectedParts.length !== 2) return false`

### Survivor 385 — Line 31
- **ID:** `2695`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 31 (col 35–61)
- **Tests completed:** 13
- **Covered by:** Request extensions req.is should return the given MIME type when matching; Request extensions req.is should return false when not matching; Request extensions req.is Should lookup the MIME type with the extension given (e.g. req.is('json'); Request extensions req.is should ignore charset; typeIs should return value if types are empty; typeIs should return value if matched type starts with plus; typeIs should return false if there is no match; typeIs should return matched value for urlencoded shorthand; typeIs should return false if expected type has wrong format; typeIs should return the same type as input if the type is not normalized
- **Nearby killed mutants:** `ConditionalExpression`: expected false to be 'application/json' // Object.is equality; `EqualityOperator`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `EqualityOperator`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `BooleanLiteral`: expected 'application/javascript/wrong' to be false // Object.is equality

- **Original (snippet):** `if (actualParts.length !== 2 || expectedParts.length !== 2) return false`

### Survivor 386 — Line 34
- **ID:** `2699`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 34 (col 7–70)
- **Tests completed:** 12
- **Covered by:** Request extensions req.is should return the given MIME type when matching; Request extensions req.is should return false when not matching; Request extensions req.is Should lookup the MIME type with the extension given (e.g. req.is('json'); Request extensions req.is should ignore charset; typeIs should return value if types are empty; typeIs should return value if matched type starts with plus; typeIs should return false if there is no match; typeIs should return matched value for urlencoded shorthand; typeIs should return the same type as input if the type is not normalized
- **Nearby killed mutants:** `ConditionalExpression`: expected false to be 'application/json' // Object.is equality; `LogicalOperator`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...; `ConditionalExpression`: expected false to be 'application/ld+json' // Object.is equality; `EqualityOperator`: expected false to be 'application/ld+json' // Object.is equality; `StringLiteral`: expected false to be 'application/ld+json' // Object.is equality

- **Original (snippet):** `if (expectedParts[0] !== '*' && expectedParts[0] !== actualParts[0]) return false`

### Survivor 387 — Line 39
- **ID:** `2712`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 39 (col 7–86)
- **Tests completed:** 1
- **Covered by:** typeIs should return value if matched type starts with plus
- **Nearby killed mutants:** `ConditionalExpression`: expected false to be 'application/ld+json' // Object.is equality; `EqualityOperator`: expected false to be 'application/ld+json' // Object.is equality

- **Original (snippet):** `expectedParts[1].length <= actualParts[1].length + 1 &&
      expectedParts[1].slice(1) === actualParts[1].slice(1 - expectedParts[1].length)`

### Survivor 388 — Line 39
- **ID:** `2714`
- **Mutator:** `LogicalOperator`
- **Replacement:** `expectedParts[1].length <= actualParts[1].length + 1 || expectedParts[1].slice(1) === actualParts[1].slice(1 - expectedParts[1].length)`
- **Location:** Line 39 (col 7–86)
- **Tests completed:** 1
- **Covered by:** typeIs should return value if matched type starts with plus
- **Nearby killed mutants:** `ConditionalExpression`: expected false to be 'application/ld+json' // Object.is equality; `EqualityOperator`: expected false to be 'application/ld+json' // Object.is equality

- **Original (snippet):** `expectedParts[1].length <= actualParts[1].length + 1 &&
      expectedParts[1].slice(1) === actualParts[1].slice(1 - expectedParts[1].length)`

### Survivor 389 — Line 39
- **ID:** `2715`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 39 (col 7–59)
- **Tests completed:** 1
- **Covered by:** typeIs should return value if matched type starts with plus
- **Nearby killed mutants:** `ConditionalExpression`: expected false to be 'application/ld+json' // Object.is equality; `EqualityOperator`: expected false to be 'application/ld+json' // Object.is equality

- **Original (snippet):** `expectedParts[1].length <= actualParts[1].length + 1 &&`

### Survivor 390 — Line 39
- **ID:** `2716`
- **Mutator:** `EqualityOperator`
- **Replacement:** `expectedParts[1].length < actualParts[1].length + 1`
- **Location:** Line 39 (col 7–59)
- **Tests completed:** 1
- **Covered by:** typeIs should return value if matched type starts with plus
- **Nearby killed mutants:** `ConditionalExpression`: expected false to be 'application/ld+json' // Object.is equality; `EqualityOperator`: expected false to be 'application/ld+json' // Object.is equality

- **Original (snippet):** `expectedParts[1].length <= actualParts[1].length + 1 &&`

### Survivor 391 — Line 39
- **ID:** `2718`
- **Mutator:** `ArithmeticOperator`
- **Replacement:** `actualParts[1].length - 1`
- **Location:** Line 39 (col 34–59)
- **Tests completed:** 1
- **Covered by:** typeIs should return value if matched type starts with plus
- **Nearby killed mutants:** `ConditionalExpression`: expected false to be 'application/ld+json' // Object.is equality; `EqualityOperator`: expected false to be 'application/ld+json' // Object.is equality

- **Original (snippet):** `expectedParts[1].length <= actualParts[1].length + 1 &&`

### Survivor 392 — Line 40
- **ID:** `2719`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 40 (col 7–86)
- **Tests completed:** 1
- **Covered by:** typeIs should return value if matched type starts with plus
- **Nearby killed mutants:** `EqualityOperator`: expected false to be 'application/ld+json' // Object.is equality; `MethodExpression`: expected false to be 'application/ld+json' // Object.is equality; `MethodExpression`: expected false to be 'application/ld+json' // Object.is equality; `ArithmeticOperator`: expected false to be 'application/ld+json' // Object.is equality

- **Original (snippet):** `expectedParts[1].slice(1) === actualParts[1].slice(1 - expectedParts[1].length)`

### Survivor 393 — Line 83
- **ID:** `2767`
- **Mutator:** `EqualityOperator`
- **Replacement:** `i <= types.length`
- **Location:** Line 83 (col 15–31)
- **Tests completed:** 14
- **Covered by:** Request extensions req.is should return the given MIME type when matching; Request extensions req.is should return false when not matching; Request extensions req.is Should lookup the MIME type with the extension given (e.g. req.is('json'); Request extensions req.is should ignore charset; typeIs should return value if types are empty; typeIs should return value if matched type starts with plus; typeIs should return false if there is no match; typeIs should return matched value for urlencoded shorthand; typeIs should return false if types are not strings; typeIs should return false if expected type has wrong format; typeIs should return the same type as input if the type is not normalized
- **Nearby killed mutants:** `ConditionalExpression`: expected false to be 'application/json' // Object.is equality; `EqualityOperator`: expected false to be 'application/json' // Object.is equality; `BlockStatement`: Test timed out in 5000ms.
If this is a long-running test, pass a timeout valu...

- **Original (snippet):** `for (i = 0; i < types.length; i++) {`

### Survivor 394 — Line 86
- **ID:** `2780`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `false`
- **Location:** Line 86 (col 33–57)
- **Tests completed:** 8
- **Covered by:** Request extensions req.is should return the given MIME type when matching; Request extensions req.is Should lookup the MIME type with the extension given (e.g. req.is('json'); Request extensions req.is should ignore charset; typeIs should return value if types are empty; typeIs should return matched value for urlencoded shorthand; typeIs should return the same type as input if the type is not normalized
- **Nearby killed mutants:** `ConditionalExpression`: expected 'application/x-www-form-urlencoded' to be 'urlencoded' // Object.is ...; `ConditionalExpression`: expected '+json' to be 'application/ld+json' // Object.is equality; `LogicalOperator`: expected '+json' to be 'application/ld+json' // Object.is equality; `ConditionalExpression`: expected '+json' to be 'application/ld+json' // Object.is equality; `EqualityOperator`: expected '+json' to be 'application/ld+json' // Object.is equality

- **Original (snippet):** `return type[0] === '+' || type.indexOf('*') !== -1 ? val : type`

## File: `packages/url/src/index.ts`

### Survivor 395 — Line 13
- **ID:** `2790`
- **Mutator:** `ConditionalExpression`
- **Replacement:** `true`
- **Location:** Line 13 (col 18–43)
- **Tests completed:** 164
- **Covered by:** Testing App should launch a basic server; Testing App Custom onError works; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF; getURLParams(reqUrl, url) omits optional param when not supplied; getURLParams(reqUrl, url) parses URL params and returns an object with matches; getURLParams(reqUrl, url) URL params are URI encoded
- **Nearby killed mutants:** `ConditionalExpression`: Cannot read properties of null (reading '1'); `ConditionalExpression`: Request "GET /val1/val2" should have expected JSON body
+ actual - expected

...; `LogicalOperator`: Cannot read properties of null (reading '1'); `EqualityOperator`: Request "GET /val1/val2" should have expected JSON body
+ actual - expected

...

- **Original (snippet):** `if (matches && typeof keys !== 'boolean')`

### Survivor 396 — Line 13
- **ID:** `2792`
- **Mutator:** `StringLiteral`
- **Replacement:** `""`
- **Location:** Line 13 (col 34–43)
- **Tests completed:** 164
- **Covered by:** Testing App should launch a basic server; Testing App Custom onError works; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF; getURLParams(reqUrl, url) omits optional param when not supplied; getURLParams(reqUrl, url) parses URL params and returns an object with matches; getURLParams(reqUrl, url) URL params are URI encoded
- **Nearby killed mutants:** `ConditionalExpression`: Cannot read properties of null (reading '1'); `ConditionalExpression`: Request "GET /val1/val2" should have expected JSON body
+ actual - expected

...; `LogicalOperator`: Cannot read properties of null (reading '1'); `EqualityOperator`: Request "GET /val1/val2" should have expected JSON body
+ actual - expected

...

- **Original (snippet):** `if (matches && typeof keys !== 'boolean')`

### Survivor 397 — Line 14
- **ID:** `2794`
- **Mutator:** `EqualityOperator`
- **Replacement:** `i <= keys.length`
- **Location:** Line 14 (col 21–36)
- **Tests completed:** 164
- **Covered by:** Testing App should launch a basic server; Testing App Custom onError works; Testing App req and res inherit properties from previous middlewares; Testing App req and res inherit properties from previous middlewares asynchronously; Testing App routing should add routes added before app.use; Testing App routing should respond on matched route; Testing App routing should match wares containing base path; Testing App routing "*" should catch all undefined routes; Testing App routing should flatten the array of wares; Testing App routing should can set url prefix for the application; Testing App routing next(err) next function skips current middleware; Testing App routing next(err) middleware is only executed once even when matched multiple times; Testing App routing next(err) next function handles errors; Testing App routing next(err) next function sends error message if it's not an HTTP status code or string; Testing App routing next(err) errors in async wares do not destroy the app; Testing App routing next(err) errors in sync wares do not destroy the app; App methods app.route works properly; App methods app.route supports chaining route methods; HTTP methods app.get handles get request; HTTP methods app.post handles post request; HTTP methods app.put handles put request; HTTP methods app.patch handles patch request; HTTP methods app.head handles head request; HTTP methods app.delete handles delete request; HTTP methods app.checkout handles checkout request; HTTP methods app.copy handles copy request; HTTP methods app.lock handles lock request; HTTP methods app.merge handles merge request; HTTP methods app.mkactivity handles mkactivity request; HTTP methods app.mkcol handles mkcol request; HTTP methods app.move handles move request; HTTP methods app.search handles search request; HTTP methods app.notify handles notify request; HTTP methods app.purge handles purge request; HTTP methods app.report handles report request; HTTP methods app.subscribe handles subscribe request; HTTP methods app.unsubscribe handles unsubscribe request; HTTP methods HEAD request works when any of the method handlers are defined; Route handlers router accepts array of middlewares; Route handlers router accepts path as array of middlewares; Route handlers router accepts list of middlewares; Route handlers router accepts array of wares; Route handlers router methods do not match loosely; Route handlers should accept array of paths; Subapps when a sub-app is mounted on root should execute sub-app middleware when matched; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.get' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.use'd sub-app middleware is exhausted; Subapps when a sub-app is mounted on root when sub-app registers middleware with '.all' should continue middleware execution when '.route' sub-app middleware is exhausted; Subapps multiple sub-apps mount on root; Subapps sub-app handles its own path; Subapps sub-app paths get prefixed with the mount path; Subapps lets other wares handle the URL if subapp doesnt have that path; Subapps matches when mounted on params; Subapps matches when mounted on params and on custom subapp route; Subapps sends bad request on malformed params; Subapps handles errors by parent when no onError specified; Subapps handles errors in sub when onError is defined; Subapps subapps mount on path regardless if path has leading slash; Subapps should handle HEAD requests to sub-app routes; Subapps should not continue middleware chain if response is already ended; Subapps should handle empty sub-app with no middleware; Subapps should call parent next when sub-app exhausts middleware; Subapps should handle HEAD request reaching fallback handler; Template engines app.render caching should use default View class when no custom view is set; App.use with array of paths should handle array of string paths; App.use with array of paths should handle single string path; App settings xPoweredBy should set X-Powered-By to "tinyhttp"; App settings xPoweredBy when disabled should not send anything; App settings xPoweredBy should use custom string when xPoweredBy is a string; App settings bindAppToReqRes references the current app instance in req.app and res.app; App settings enableReqRoute attach current fn to req.route when enabled; App settings applyExtensions should use custom applyExtensions function when provided; App settings returns the correct middleware if there are more than one; send(body) should set 304 status for fresh requests; rate-limit request counting should let the first request through; rate-limit request counting should call increase on the store; rate-limit request counting should refuse additional connections once IP has reached the max; rate-limit request counting should show the provided message instead of the default message when max connections are reached; rate-limit request counting should allow the error statusCode to be customized; rate-limit request counting should decrement hits with failed response and skipFailedRequests; rate-limit request counting should decrement hits with success response and skipSuccessfulRequests; rate-limit headers should send correct x-ratelimit-limit, x-ratelimit-remaining, and x-ratelimit-reset headers; rate-limit headers should send correct ratelimit-limit, ratelimit-remaining, and ratelimit-reset headers; rate-limit headers should return the Retry-After header once IP has reached the max; rate-limit headers catches errors and calls nextFunction; rate-limit headers should call shouldSkip if provided; rate-limit headers should support max as an async function; rate-limit headers should not decrement on successful requests when skipFailedRequests is true; rate-limit headers should not decrement on failed requests when skipSuccessfulRequests is true; rate-limit headers should call onLimitReached when limit is first reached; rate-limit headers should handle store error in incr callback; rate-limit headers should not send headers when headers option is false and rate limited; rate-limit edge cases should handle draftPolliRatelimitHeaders without resetTime; Request extensions req.xhr should match for any case; Response properties should have default HTTP Response properties; Response methods res.json stringifies the object; Response methods res.send sends plain text data; Response methods res.send falls back to res.json when sending objects; Response methods res.status sends status; Response methods res.sendStatus sends status + text; Response methods res.location sends "Location" header; Response methods res.set sets headers; Response methods res.send sets proper headers; Response methods res.links sends links; Response methods res.cookie sends cookies to client; Response methods res.type(type) should detect MIME type; Response methods res.type(type) should detect MIME type by extension; Response methods res.render should support absolute paths; Response methods res.render should support absolute paths with "view engine"; Response methods res.render should error without "view engine" set and file extension to a non-engine module; Response methods res.render should error without "view engine" set and no file extension; Response methods res.render should support index files; Response methods res.render should give precedence to res.locals over app.locals; Response methods res.render should give precedence to res.render() locals over res.locals; Response methods res.render should give precedence to res.render() locals over app.locals; Response methods res.render should allow passing custom engine options via res.render(); Response methods res.render should merge _locals from options into template locals; Request properties should have default HTTP Request properties; Request properties URL extensions req.query is being parsed properly; Request properties URL extensions req.params is being parsed properly; Request properties URL extensions req.url does not include the mount path; Request properties URL extensions should set the correct req.url on routes even in a subapp; Request properties URL extensions should set the correct req.url on middlewares even in a subapp; Request properties URL extensions should set the correct req.url on a subapp mounted on a wildcard route, for both route and mw; Request properties URL extensions should rewrite req.url, follow the next route and set correct req.url in response; Request properties URL extensions should rewrite req.url and return 404 if route not found; Request properties URL extensions should reset params when middleware chain finds new matches after rewrite; Request properties URL extensions should set the correct req.url on routes after req.url was rewritten; Request properties Network extensions IPv4 req.ip & req.ips is being parsed properly; Request properties Network extensions IPv4 req.ip & req.ips do not trust proxies by default; Request properties Network extensions IPv4 req.ip & req.ips support trusted proxies with "trust proxy"; Request properties Network extensions req.protocol is http by default; Request properties Network extensions req.protocol uses X-Forwarded-Proto header when trusted; Request properties Network extensions req.protocol extracts first value from comma-separated X-Forwarded-Proto; Request properties Network extensions req.secure is false by default; Request properties Network extensions req.secure is true when connection is encrypted (HTTPS); Request properties Network extensions req.subdomains is empty by default; Request properties Network extensions should derive hostname from the host header and assign it to req.hostname; Request properties Network extensions should not derive hostname from the host header when multiple values are provided; Request properties Network extensions should derive hostname from the :authority header and assign it to req.hostname; Request properties Network extensions should derive port from the host header and assign it to req.port; Request properties Network extensions should derive port from the :authority header and assign it to req.port; Request properties Network extensions should use x-forwarded-host when proxy is trusted; Request properties Network extensions should return undefined hostname when :authority header is an array; Request properties Network extensions should return undefined hostname when x-forwarded-host header is an array; Request properties Network extensions should return hostname when :authority and host headers match; Request properties Network extensions should parse IPv6 literal in host header; Request properties Network extensions should handle hostname without port; Request properties Network extensions should return subdomains as empty array when hostname is undefined; Request properties Network extensions should return IP address as subdomain when hostname is an IP; Request properties req.xhr is false because of node-superagent; Request properties req.accepts methods share cached Accepts instance; Request properties req.path is the URL but without query parameters; Request properties req.path works properly for optional parameters; Request properties req.fresh and req.stale get set; jsonp when no callback is defined; jsonp should preserve existing Content-Type header when already set; jsonp should use callback with jsonp when defined; jsonp should change <>& into UTF; getURLParams(reqUrl, url) omits optional param when not supplied; getURLParams(reqUrl, url) parses URL params and returns an object with matches; getURLParams(reqUrl, url) URL params are URI encoded
- **Nearby killed mutants:** `ConditionalExpression`: Request "GET /val1/val2" should have expected JSON body
+ actual - expected

...; `EqualityOperator`: expected {} to strictly equal { bar: 'qaz' }; `BlockStatement`: expected {} to strictly equal { bar: 'qaz' }

- **Original (snippet):** `for (let i = 0; i < keys.length; i++) {`