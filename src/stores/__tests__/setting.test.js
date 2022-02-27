import settingStore from "../settingsStore"
import {THEME} from "../../utils/const";

describe("setting store test", () => {
    it("default setting added", () => {
        const store = new settingStore
      store.saveOptions()
        expect(store.options.theme).toBe(THEME.LIGHT)
        expect(store.options.counterWidget).toBeTruthy()
    })
})