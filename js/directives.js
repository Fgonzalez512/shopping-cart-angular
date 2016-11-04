module.directive('yesNo', function() {
    return {
        template: '<span>{{ yesNo ? "yes" : "no" }}</span>',
        scope: {
            yesNo: '='
        }
    };
});
