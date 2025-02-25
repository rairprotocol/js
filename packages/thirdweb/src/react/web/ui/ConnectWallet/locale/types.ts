import type { LocaleId } from "../../types.js";

export type ConnectLocale = {
  id: LocaleId;
  agreement: {
    and: string;
    prefix: string;
    privacyPolicy: string;
    termsOfService: string;
  };
  goBackButton: string;
  backupWallet: string;
  confirmInWallet: string;
  connectAWallet: string;
  connectedToSmartWallet: string;
  connecting: string;
  continueAsGuest: string;
  copyAddress: string;
  currentNetwork: string;
  defaultButtonTitle: string;
  defaultModalTitle: string;
  disconnectWallet: string;
  getStarted: string;
  guest: string;
  buy: string;
  guestWalletWarning: string;
  installed: string;
  networkSelector: {
    addCustomNetwork: string;
    allNetworks: string;
    categoryLabel: {
      others: string;
      popular: string;
      recentlyUsed: string;
    };
    failedToSwitch: string;
    inputPlaceholder: string;
    loading: string;
    mainnets: string;
    testnets: string;
    title: string;
  };
  newToWallets: string;
  or: string;
  personalWallet: string;
  receive: string;
  receiveFundsScreen: { instruction: string; title: string };
  recommended: string;
  requestTestnetFunds: string;
  send: string;
  sendFundsScreen: {
    amount: string;
    insufficientFunds: string;
    invalidAddress: string;
    noTokensFound: string;
    searchToken: string;
    selectTokenTitle: string;
    sendTo: string;
    sending: string;
    submitButton: string;
    successMessage: string;
    title: string;
    token: string;
    transactionFailed: string;
    transactionRejected: string;
  };
  signIn: string;
  signatureScreen: {
    instructionScreen: {
      instruction: string;
      signInButton: string;
      title: string;
      disconnectWallet: string;
    };
    signingScreen: {
      approveTransactionInSafe: string;
      failedToSignIn: string;
      inProgress: string;
      prompt: string;
      promptForSafe: string;
      title: string;
      tryAgain: string;
    };
  };
  smartWallet: string;
  switchAccount: string;
  switchNetwork: string;
  switchTo: string;
  switchingNetwork: string;
  transactions: string;
  viewAllTransactions: string;
  welcomeScreen: { defaultSubtitle: string; defaultTitle: string };
  manageWallet: {
    title: string;
    connectAnApp: string;
    exportPrivateKey: string;
  };
  viewFunds: {
    title: string;
    viewTokens: string;
    viewNFTs: string;
    viewAssets: string;
  };
};
