import utilityStore from "../utilityStore"

describe("utility store test", () => {
    it("fact adding", () => {
        const store = new utilityStore
        store.setFact('time for a tea')
        expect(store.fact).toBe('time for a tea')
    })
})