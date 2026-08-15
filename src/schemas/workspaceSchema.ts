  import { z } from "zod";

  export const usageTypeSchema = z.object({
    usageType: z.enum(["personal", "team"], {
      message: "Please select how you will use this workspace",
    }),
  });

  export const workspaceDetailsSchema = z.object({
      workspaceName: z.string().min(3, "Workspace name must be at least 3 characters! "),
      workspaceUrl: z.string().url().regex(/^[a-z0-9-]+$/, "URL can only contain lowercase letters, numbers, and hyphens.")
  })

  export type UsageTypeData = z.infer<typeof usageTypeSchema>;    
  export type WorkspaceDetailsData = z.infer<typeof workspaceDetailsSchema>;