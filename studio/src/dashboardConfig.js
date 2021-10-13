export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6166c3275c65e6d7861d0278",
                  title: "Sanity Studio",
                  name: "alleyfield-site-studio",
                  apiId: "6ce6de6f-702a-4c9a-aab3-d0fc3c4ab113",
                },
                {
                  buildHookId: "6166c327eac678c9de5cf7c3",
                  title: "Blog Website",
                  name: "alleyfield-site",
                  apiId: "238b4582-df65-4dce-a1fe-47c734cbcce9",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Alleyfield/alleyfield-site",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://alleyfield-site.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
