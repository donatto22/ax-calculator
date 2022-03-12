export const OS = {
    /**
    Return the operating system
    @return {string} Windows, Linux, Android ...
    **/
    getOS: function() {
        return navigator.userAgentData.platform
    },

    isMobile: function() {
        return navigator.userAgentData.mobile
    }
}