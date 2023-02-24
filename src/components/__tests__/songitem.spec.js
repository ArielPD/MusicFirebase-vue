import SongItem from "@/components/SongItem.vue";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";

describe("SongItem.vue", () => {
  test("render song.display_name", () => {
    const song = {
      display_name: "test",
    };
    const wrapper = shallowMount(SongItem, {
      propsData: {
        song,
      },
      global: {
        components: {
          "router-link": RouterLinkStub,
        },
      },
    });

    //expect(wrapper.text()).toContain(song.display_name);
    //other away to test
    const compositionAuthor = wrapper.find('.text-gray-500');
    expect(compositionAuthor.text()).toBe(song.display_name);
  });
});
