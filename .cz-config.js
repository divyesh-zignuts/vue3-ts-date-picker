module.exports = {
  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    { value: 'docs', name: 'docs:     Documentation only changes' },
    {
      value: 'style',
      name: 'style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
    },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature'
    },
    {
      value: 'perf',
      name: 'perf:     A code change that improves performance'
    },
    {
      value: 'test',
      name: 'test:     Adding missing tests or correcting existing tests'
    },
    {
      value: 'build',
      name: 'build:    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)'
    },
    {
      value: 'ci',
      name: 'ci:       Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)'
    },
    {
      value: 'chore',
      name: "chore:    Other changes that don't modify src or test files"
    },

    { value: 'revert', name: 'revert:   Revert to a commit' },
    { value: 'wip', name: 'wip:      Work in progress' }
  ],

  // scopes: [
  //   { name: "accounts" },
  //   { name: "admin" },
  //   { name: "exampleScope" },
  //   { name: "changeMe" }
  // ],

  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: "TICKET-",
  // ticketNumberRegExp: "\\d{1,5}",

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [

      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: 'What is the scope of this change (e.g. component or file name) (press enter to skip):',
    // used if allowCustomScopes is true
    customScope: 'What is the scope of this change (e.g. component or file name) (press enter to skip):',
    subject: 'Write a short, imperative tense description of the change:\n',
    body: 'Provide a longer description of the change. Use "|" to break new line: (press enter to skip)\n',
    breaking: 'List any BREAKING CHANGES (press enter to skip):\n',
    footer: 'List any ISSUES CLOSED by this change e.g.: #31, #34: (press enter to skip)\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?'
  },

  // allowCustomScopes: false,
  // allowBreakingChanges: ["feat", "fix"],
  // skip any questions you want
  skipQuestions: ['footer'],

  // limit subject length
  subjectLimit: 100
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
