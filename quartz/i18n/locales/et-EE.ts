import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Nimetu",
    description: "Kirjeldus puudub.",
  },
  components: {
    callout: {
      note: "Note",
      abstract: "Resümee",
      info: "Info",
      todo: "Teha",
      tip: "Tip",
      success: "Õnnestumine",
      question: "Küsimus",
      warning: "Hoiatus",
      failure: "Läbikukkumine",
      danger: "Oht",
      bug: "Bug",
      example: "Näide",
      quote: "Tsitaat",
    },
    backlinks: {
      title: "Backlinks",
      noBacklinksFound: "No backlinks found",
    },
    themeToggle: {
      lightMode: "Light mode",
      darkMode: "Dark mode",
    },
    readerMode: {
      title: "Reader mode",
    },
    explorer: {
      title: "Explorer",
    },
    footer: {
      createdWith: "Created with",
    },
    graph: {
      title: "Graph View",
    },
    recentNotes: {
      title: "Recent Notes",
      seeRemainingMore: ({ remaining }) => `See ${remaining} more →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transclude of ${targetSlug}`,
      linkToOriginal: "Link to original",
    },
    search: {
      title: "Otsing",
      searchBarPlaceholder: "Otsing",
    },
    tableOfContents: {
      title: "Sisukord",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} min lugemiseks`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Recent notes",
      lastFewNotes: ({ count }) => `Last ${count} notes`,
    },
    error: {
      title: "Not Found",
      notFound: "Either this page is private or doesn't exist.",
      home: "Return to Homepage",
    },
    folderContent: {
      folder: "Kaust",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 item under this folder." : `${count} items under this folder.`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Tag Index",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 item with this tag." : `${count} items with this tag.`,
      showingFirst: ({ count }) => `Showing first ${count} tags.`,
      totalTags: ({ count }) => `Found ${count} total tags.`,
    },
  },
} as const satisfies Translation
