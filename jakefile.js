/*global desc, task, jake, fail, complete */
(function() {
    "use strict";
    task("default", ["lint"]);

    desc("Lint everything");
    task("lint", [], function() {
        var lint = require("./build/lint/lint_runner.js");

        var list = new jake.FileList();
        list.include('**/*.js');
        list.exclude("node_modules");
        lint.validateFileList(list.toArray(), nodeLintOptions(), {});
    });

    function nodeLintOptions() {
        return {
            bitwise: true,
            curly: true,
            eqeqeq: true,
            forin: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            noempty: true,
            nonew: true,
            regexp: true,
            undef: true,
            strict: true,
            trailing: true,
            node: true
        };
    }
})();