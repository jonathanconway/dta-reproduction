---
inject: true
to: src/<%= h.dir() %>/index.ts
append: true
skip_if: <%= name %>
---

export * from "./<%= h.filename() %>";