# Migration `20201122024649-add-content-field-to-comment`

This migration has been generated by Stevemmmmmm at 11/21/2020, 6:46:49 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Comment" ADD COLUMN     "content" TEXT NOT NULL
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201122023702-initialization..20201122024649-add-content-field-to-comment
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -28,8 +28,9 @@
   comments  Comment[]
 }
 model Comment {
-  id     Int  @id @default(autoincrement())
-  post   Post @relation(fields: [postId], references: [id])
-  postId Int
+  id      Int    @id @default(autoincrement())
+  content String
+  post    Post   @relation(fields: [postId], references: [id])
+  postId  Int
 }
```

