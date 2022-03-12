export const OS = {
    /**
     * Web function
    Return the operating system
    @return {string} Windows, Linux, Android ...
    **/
    getOS: function() {
        return navigator.userAgentData.platform
    },

    /**
    * Web function    
    **/

    isMobile: function() {
        return navigator.userAgentData.mobile
    }
}