describe("Over event", (done) => {
    it("shows the icons if the card is over or not", () => {
        const wrapper = mount(MenuRepasRecetteCard, {
            propsData: {}
        });
        wrapper.find(".flip-card-front").trigger("mouseover");
        wrapper.vm.$nextTick( () => {
            expect(wrapper.find(".isAct").text()).contain("remove_red_eye");
            done();
        });
    });
});