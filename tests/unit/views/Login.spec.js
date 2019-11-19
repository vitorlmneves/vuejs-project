import { shallowMount, config } from "@vue/test-utils";
import Login from "@/views/Login.vue";
config.mocks.$t = key => key;

describe("Test case for testing Login view", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Login);
  });
  it("should have a form with 2 inputs (email / password) and submit element", () => {
    expect(wrapper.findAll("form").length).toBe(1);
    expect(wrapper.findAll("form input[type=email]").length).toBe(1);
    expect(wrapper.findAll("form input[type=password]").length).toBe(1);
    expect(wrapper.findAll("form [type=submit]").length).toBe(1);
  });
  it("email value updates", () => {
    const email = "test@test.com";
    const emailInput = wrapper.find("input[type=email]");

    expect(emailInput.element.value).toEqual("");
    wrapper.setData({ form: { email: email } });
    expect(emailInput.element.value).toEqual(email);
  });
  it("password value updates", () => {
    const password = "test";
    const passwordInput = wrapper.find("input[type=password]");

    expect(passwordInput.element.value).toEqual("");
    wrapper.setData({ form: { password: password } });
    expect(passwordInput.element.value).toEqual(password);
  });
  it("check if form on submit calls submit function", async () => {
    const mockMethods = {
      submit: jest.fn()
    };
    const form = wrapper.find("form");

    wrapper.setMethods(mockMethods);
    await form.trigger("submit.prevent");
    expect(mockMethods.submit).toHaveBeenCalled();
  });
  it("check if submit button gets disabled", () => {
    const submitElement = wrapper.find("form [type=submit]");

    expect(wrapper.vm.requesting).toBe(false);
    wrapper.setData({ requesting: true });
    expect(submitElement.attributes().disabled).toBe("disabled");
  });
  it("check if error renders", () => {
    expect(wrapper.vm.error).toBe(false);
    wrapper.setData({ error: true });
    expect(wrapper.findAll(".error").length).toBe(1);
  });
});
