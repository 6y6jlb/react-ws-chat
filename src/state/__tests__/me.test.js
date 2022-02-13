import meStore from "../meStore"
import {LANG} from "../../components/App/const";

describe("me store test", () => {
    it("new user adding", () => {
        const store = new meStore
        store.setMe({
            location: {country: 'russia', city: 'moskow'},
            language: LANG.EN,
            isActivated: false,
            email: 'email',
            name: 'name',
            id: '1234243'
        })
        expect(store.me.name).toBe('name')
        expect(store.me.isActivated).toBeFalsy()
    })
    it("save lang", () => {
        const store = new meStore
        store.saveLang(LANG.RU)
        expect(store.me.language).toBe(LANG.RU)
        store.saveLang(LANG.EN)
        expect(store.me.language).toBe(LANG.EN)
    })
    it("logout", () => {
        const store = new meStore
        store.logout()
        expect(store.me.name).toBeFalsy()
    })
})