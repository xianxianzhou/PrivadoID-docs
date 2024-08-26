export const contentData = {
  headText:
    '<span class="white-text">Integrate Self-Sovereign Identity Solution with Zero Knowledge Proofs!',
  headButtons: [
    {
      title: "Build",
      link: "docs/introduction",
      target: "",
    },
    {
      title: "Quick start guide",
      link: "docs/quick-start-demo",
      target: "",
      type: "secondary",
    },
  ],

  linksCard: [
    {
      iconSrc: "/images/verify-credential.png",
      title: "Verify credentials",
      cardLink: "/docs/verifier/verifier-overview",
      blockInfo: [
        "Seamless onboarding,",
        "User authentication,",
        "Gated access control,",
        "Passwordless login,",
        "Reveal selective data,",
        "Off-chain and on-chain verification.",
      ],
      tutorialsInfo: [
        {
          title: "Verify data off-chain with Verifier SDK",
          link: "/docs/category/off-chain-verification",
        },
        {
          title: "Verify data on-chain with Verifier SDK",
          link: "/docs/verifier/on-chain-verification/overview",
        },
        {
          title: "Build specific queries",
          link: "/docs/verifier/query-builder",
        },
        {
          title: "Set verification conditions",
          link: "/docs/verifier/verification-library/zk-query-language",
        },
      ],
    },
    {
      iconSrc: "/images/issue-credentials.png",
      title: "Issue credentials",
      cardLink: "/docs/issuer/issuer-overview",
      blockInfo: [
        "Data portability,",
        "KYC,",
        "Reputation,",
        "Identification,",
        "Age,",
        "Sybil resistance,",
        "Proof of personhood.",
      ],
      tutorialsInfo: [
        {
          title: "Quick start",
          link: "/docs/issuer/setup-issuer-core",
        },
        {
          title: "Issue credentials via Issuer Node API & UI",
          link: "/docs/issuer/setup-issuer-ui",
        },
        {
          title: "Create identity wallets, browser extensions and nodes via JS SDK",
          link: "/docs/js-sdk/js-sdk-overview",
        },
        {
          title: "Create or reuse credential schemas",
          link: "/docs/issuer/schema-builder",
        },
        {
          title: "Link credentials to different blockchains",
          link: "/docs/contracts/credential-linkage",
        },
      ],
    },
    {
      iconSrc: "/images/identity-wallet.png",
      title: "Identity wallet",
      cardLink: "/docs/wallet/wallet-overview",
      blockInfo: [
        "User controls their data,",
        "Data management,",
        "Wallet integration,",
        "Public and private profiles,",
        "Switch networks,",
        "Identity recovery,",
        "Reference application.",
      ],
      tutorialsInfo: [
        {
          title: "Build an app with Flutter SDK",
          link: "/docs/wallet/wallet-sdk/flutter-sdk/build-app-with-flutter-sdk",
        },
        {
          title: "Build an app with Android SDK",
          link: "/docs/wallet/wallet-sdk/android-sdk/install-android-sdk",
        },
        {
          title: "Wallet APIs",
          link: "/docs/category/wallet-apis",
        },
        {
          title: "Polygon ID Wallet app: SDK reference implementation",
          link: "/docs/wallet/wallet-sdk/polygonid-app",
        },
        {
          title: "Web wallet via JS SDK",
          link: "/docs/js-sdk/js-sdk-browser-wallet-demo",
        },
      ],
    },
  ],
};
