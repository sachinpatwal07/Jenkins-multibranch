module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "revert"], // Allow only these commit types
    ],
  },
  prompt: {
    questions: {
      type: {
        description: "Select the type of change that you're committing:",
        enum: {
          feat: {
            description:
              "A new feature (Update version as minor)",
            title: "Features",
            emoji: "✨",
          },
          fix: {
            description: "A bug fix (Update version as patch)",
            title: "Bug Fixes",
            emoji: "🐛",
          },
          revert: {
            description: "Reverts a previous commit (Update version as minor)",
            title: "Reverts",
            emoji: "🗑",
          },
        },
        default: "feat",
      },
      scope: {
        description:
          "What is the scope of this change (e.g., component or file name):",
        default: "",
      },
      subject: {
        description:
          "Write a short, imperative tense description of the change:",
        default: "",
      },
      body: {
        description: "Provide a longer description of the change:",
        default: "",
      },
      isBreaking: {
        description: "Are there any breaking changes? (Update Version as Major) ",
        default: "n",
      },
      breakingBody: {
        description:
          "A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit, which contains the breaking changes:",
        default: "",
      },
      breaking: {
        description: "Describe the breaking changes:",
        default: "",
      },
      isIssueAffected: {
        description: "Does this change affect any open issues? (y/n)",
        default: "n",
      },
      issuesBody: {
        description:
          "If issues are closed, the commit requires a body. Please enter a longer description of the commit, detailing the issues that are closed:",
        default: "",
      },
      issues: {
        description: 'Add issue references (e.g., "fix #123", "re #123".):',
        default: "",
      },
    },
  },
};
