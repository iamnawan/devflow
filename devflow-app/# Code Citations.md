# Code Citations

## License: unknown
https://github.com/sosasamu/admin-dashboard/tree/43402f96e99d1f518c57908b5d590281c9b05efd/app/api/auth/%5B...nextauth%5D/route.tsx

```
} from "@prisma/client";

const prisma = new PrismaClient();

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
```

