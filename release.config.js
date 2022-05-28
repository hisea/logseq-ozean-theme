module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: [
          "CHANGELOG.md",
          "package.json",
          "package-lock.json",
          "main.css",
        ],
      },
    ],
    [
      "@semantic-release/exec",
      {
        prepareCmd:
          "zip -qq -r logseq-ozean-theme-${nextRelease.version}.zip icon.png *.css light.png dark.png README.md LICENSE package.json",
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: "logseq-ozean-theme-*.zip",
      },
    ],
  ],
};
