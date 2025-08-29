"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCached = useCached;
const react_1 = require("react");
function useCached(key, fetcher, ttl) {
    const [data, setData] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        let isMounted = true;
        function load() {
            return __awaiter(this, void 0, void 0, function* () {
                setLoading(true);
                try {
                    const result = yield fetcher();
                    if (isMounted)
                        setData(result);
                }
                finally {
                    if (isMounted)
                        setLoading(false);
                }
            });
        }
        load();
        return () => { isMounted = false; };
    }, [key]);
    return { data, loading };
}
