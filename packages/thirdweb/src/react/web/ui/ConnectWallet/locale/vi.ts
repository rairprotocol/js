import type { ConnectLocale } from "./types.js";

const connectLocaleVi: ConnectLocale = {
  id: "vi_VN",
  signIn: "Đăng nhập",
  defaultButtonTitle: "Kết nối ví",
  connecting: "Đang kết nối",
  switchNetwork: "Chuyển mạng",
  switchingNetwork: "Đang chuyển mạng",
  defaultModalTitle: "Đăng nhập",
  recommended: "Khuyên dùng",
  installed: "Đã cài đặt",
  buy: "Mua",
  continueAsGuest: "Continue as guest",
  connectAWallet: "Kết nối ví",
  newToWallets: "Tìm hiểu về ví điện tử",
  getStarted: "Bắt đầu",
  guest: "Guest",
  send: "Gửi",
  receive: "Nhận",
  currentNetwork: "Mạng lưới hiện tại",
  switchAccount: "Chuyển tài khoản",
  requestTestnetFunds: "Nhận Testnet Funds",
  transactions: "Giao dịch",
  viewAllTransactions: "Tất cả giao dịch",
  backupWallet: "Sao lưu ví",
  guestWalletWarning:
    "Đây là ví tạm thời cho phiên đăng nhập của bạn. Vui lòng sao lưu ví nếu bạn không muốn dánh mất thông tin",
  switchTo: "Đổi qua ví", // Used in "Switch to <Wallet-Name>"
  connectedToSmartWallet: "Ví Thông Minh",
  confirmInWallet: "Xác nhận bằng ví",
  disconnectWallet: "Ngắt kết nối ví",
  copyAddress: "Sao chép địa chỉ",
  personalWallet: "Ví cá nhân",
  smartWallet: "Ví Thông Minh",
  or: "hoặc",
  goBackButton: "Quay lại",
  welcomeScreen: {
    defaultTitle: "Cánh cổng dẫn tới thế giới phi tập trung",
    defaultSubtitle: "Kết nối ví để bắt đầu",
  },
  agreement: {
    prefix: "Bằng việc kết nối, bạn đồng ý với",
    termsOfService: "Điều khoản dịch vụ",
    and: "và",
    privacyPolicy: "Chính sách bảo mật",
  },
  networkSelector: {
    title: "Chọn mạng lưới",
    mainnets: "Mainnets",
    testnets: "Testnets",
    allNetworks: "Tất cả",
    addCustomNetwork: "Thêm mạng lưới",
    inputPlaceholder: "Tìm theo tên hoặc ID",
    categoryLabel: {
      recentlyUsed: "Gần đây",
      popular: "Thông dụng",
      others: "Tất cả mạng lưới",
    },
    loading: "Đang tải",
    failedToSwitch: "Không thể đổi mạng lưới",
  },
  receiveFundsScreen: {
    title: "Nhận tiền",
    instruction: "Sử dụng địa chỉ ví này để nhận tiền",
  },
  sendFundsScreen: {
    title: "Gửi tiền",
    submitButton: "Gửi",
    token: "Token",
    sendTo: "Gửi tới",
    amount: "Số lượng",
    successMessage: "Giao dịch thành công",
    invalidAddress: "Địa chỉ không hợp lệ",
    noTokensFound: "Không tìm thấy token",
    searchToken: "Tìm kiếm hoặc dán địa chỉ token",
    transactionFailed: "Giao dịch thất baị",
    transactionRejected: "Giao dịch bị huỷ",
    insufficientFunds: "Không đủ vốn",
    selectTokenTitle: "Chọn Token",
    sending: "Đang gửi",
  },
  signatureScreen: {
    instructionScreen: {
      title: "Đăng nhập",
      instruction: "Kí vào yêu cầu tin nhắn trong ví của bạn để tiếp tục",
      signInButton: "Đăng nhập",
      disconnectWallet: "Ngắt kết nối ví",
    },
    signingScreen: {
      title: "Đang đăng nhập",
      prompt: "Ký vào yêu cầu tin nhắn trong ví của bạn",
      promptForSafe:
        "Kí vào yêu cầu tin nhắn trong ví của bạn và chấp nhận giao dịch trong ứng dụng Safe",
      approveTransactionInSafe: "Xác nhận giao dịch bằng ví Safe",
      tryAgain: "Thử lại",
      failedToSignIn: "Đăng nhập thất bại",
      inProgress: "Đang đợi xác nhận",
    },
  },
  manageWallet: {
    title: "Quản lý ví",
    connectAnApp: "Kết nối ứng dụng",
    exportPrivateKey: "Sao lưu private key",
  },
  viewFunds: {
    title: "Tài sản",
    viewTokens: "Tokens",
    viewNFTs: "NFTs",
    viewAssets: "Tài sản",
  },
};

export default connectLocaleVi;
