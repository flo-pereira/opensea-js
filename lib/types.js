"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("wyvern-js/lib/types");
exports.Network = types_1.Network;
exports.HowToCall = types_1.HowToCall;
/**
 * Events emitted by the SDK. There are five types:
 * 1. Transaction events, which tell you when a new transaction was
 *    created, confirmed, denied, or failed.
 * 2. pre-transaction events, which are named (like "WrapEth") and indicate
 *    that Web3 is asking for a signature on a transaction that needs to occur before
 *    an order is made or fulfilled. This includes approval events and account
 *    initialization.
 * 3. Basic actions: matching, cancelling, and creating orders.
 *    The "CreateOrder" event fires when a signature is being prompted
 *    to create an off-chain order. The "OrderDenied" event fires when a signature
 *    request is denied by the user.
 * 4. The "TransferAll" event, which fires when a user is about to directly
 *    transfer one or more assets to another account
 */
var EventType;
(function (EventType) {
    // Transactions and signature requests
    EventType["TransactionCreated"] = "TransactionCreated";
    EventType["TransactionConfirmed"] = "TransactionConfirmed";
    EventType["TransactionDenied"] = "TransactionDenied";
    EventType["TransactionFailed"] = "TransactionFailed";
    // Pre-transaction events
    EventType["InitializeAccount"] = "InitializeAccount";
    EventType["WrapEth"] = "WrapEth";
    EventType["UnwrapWeth"] = "UnwrapWeth";
    EventType["ApproveCurrency"] = "ApproveCurrency";
    EventType["ApproveAsset"] = "ApproveAsset";
    EventType["ApproveAllAssets"] = "ApproveAllAssets";
    // Basic actions: matching orders, creating orders, and cancelling orders
    EventType["MatchOrders"] = "MatchOrders";
    EventType["CancelOrder"] = "CancelOrder";
    EventType["ApproveOrder"] = "ApproveOrder";
    EventType["CreateOrder"] = "CreateOrder";
    // When the signature request for an order is denied
    EventType["OrderDenied"] = "OrderDenied";
    // When transferring one or more assets
    EventType["TransferAll"] = "TransferAll";
    EventType["TransferOne"] = "TransferOne";
})(EventType = exports.EventType || (exports.EventType = {}));
/**
 * Wyvern order side: buy or sell.
 */
var OrderSide;
(function (OrderSide) {
    OrderSide[OrderSide["Buy"] = 0] = "Buy";
    OrderSide[OrderSide["Sell"] = 1] = "Sell";
})(OrderSide = exports.OrderSide || (exports.OrderSide = {}));
/**
 * Wyvern fee method
 * ProtocolFee: Charge maker fee to seller and charge taker fee to buyer.
 * SplitFee: Maker fees are deducted from the token amount that the maker receives. Taker fees are extra tokens that must be paid by the taker.
 */
var FeeMethod;
(function (FeeMethod) {
    FeeMethod[FeeMethod["ProtocolFee"] = 0] = "ProtocolFee";
    FeeMethod[FeeMethod["SplitFee"] = 1] = "SplitFee";
})(FeeMethod = exports.FeeMethod || (exports.FeeMethod = {}));
/**
 * Wyvern: type of sale. Fixed or Dutch auction
 * Note: not imported from wyvern.js because it uses
 * EnglishAuction as 1 and DutchAuction as 2
 */
var SaleKind;
(function (SaleKind) {
    SaleKind[SaleKind["FixedPrice"] = 0] = "FixedPrice";
    SaleKind[SaleKind["DutchAuction"] = 1] = "DutchAuction";
})(SaleKind = exports.SaleKind || (exports.SaleKind = {}));
// Wyvern Schemas (see https://github.com/ProjectOpenSea/wyvern-schemas)
var WyvernSchemaName;
(function (WyvernSchemaName) {
    WyvernSchemaName["ERC721"] = "ERC721";
    WyvernSchemaName["ERC1155"] = "ERC1155";
    WyvernSchemaName["ENSName"] = "ENSName";
})(WyvernSchemaName = exports.WyvernSchemaName || (exports.WyvernSchemaName = {}));
var WyvernAssetLocation;
(function (WyvernAssetLocation) {
    WyvernAssetLocation["Account"] = "account";
    WyvernAssetLocation["Proxy"] = "proxy";
    WyvernAssetLocation["Other"] = "other";
})(WyvernAssetLocation = exports.WyvernAssetLocation || (exports.WyvernAssetLocation = {}));
//# sourceMappingURL=types.js.map