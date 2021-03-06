let base = "https://embed.learnj.de/include/";
// includeJs("lib/monaco-editor/dev/vs/editor/editor.main.js");
// includeJs("lib/monaco-editor/dev/vs/editor/editor.main.nls.de.js");
includeJs(base + "lib/pixijs/pixi.js");
includeCss(base + 'js.webpack/javaOnlineEmbedded.css');
includeJs(base + "lib/jquery/jquery-3.3.1.js");
includeJs(base + "lib/markdownit/markdownit.min.js");
includeJs(base + "lib/monaco-editor/dev/vs/loader.js");
includeJs(base + "js/runtimelibrary/graphics/SpriteLibrary.js");
includeJs(base + "lib/howler/howler.core.min.js");
window.onload = function () {
    let scriptPosition = window.jo_doc.indexOf('<script');
    let scripts = window.jo_doc.substr(scriptPosition);
    let config = window.jo_doc.substr(0, scriptPosition);
    if (config.indexOf('{') < 0) {
        config = "{}";
    }
    let htmlElement = document.getElementsByTagName('html')[0];
    let bodyElement = document.getElementsByTagName('body')[0];
    /** @type HTMLDivElement */
    let divElement = document.createElement('div');
    divElement.classList.add('java-online');
    divElement.setAttribute("data-java-online", config);
    divElement.style.margin = "0 0 0 15px";
    divElement.style.width = "calc(100% - 40px)";
    divElement.style.height = "calc(100% - 45px)";
    divElement.style.top = "15px";
    bodyElement.appendChild(divElement);
    divElement.innerHTML = scripts;
    // document.body.innerHTML = window.jo_doc;
    // divElement = document.getElementsByClassName('java-online')[0];
    htmlElement.style.height = "100%";
    htmlElement.style.margin = "0";
    bodyElement.style.height = "100%";
    bodyElement.style.margin = "0";
    window.javaOnlineDir = "https://embed.learnj.de/include/";
    includeJs(base + "js.webpack/javaOnline-embedded.js");
    includeJs(base + "lib/p5.js/p5.js");
};
function includeJs(src, callback, type) {
    var script = document.createElement('script');
    if (callback) {
        script.onload = function () {
            //do stuff with the script
        };
    }
    if (type) {
        script.type = type;
    }
    script.src = src;
    document.head.appendChild(script);
}
function includeCss(src) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = src;
    link.media = 'all';
    head.appendChild(link);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jbHVkZUlERS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvaW5jbHVkZWlkZS9pbmNsdWRlSURFLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLElBQUksSUFBSSxHQUFHLGtDQUFrQyxDQUFDO0FBRTlDLCtEQUErRDtBQUMvRCxzRUFBc0U7QUFDdEUsU0FBUyxDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3ZDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsbUNBQW1DLENBQUMsQ0FBQztBQUN2RCxTQUFTLENBQUMsSUFBSSxHQUFHLDRCQUE0QixDQUFDLENBQUM7QUFDL0MsU0FBUyxDQUFDLElBQUksR0FBRyxrQ0FBa0MsQ0FBQyxDQUFDO0FBQ3JELFNBQVMsQ0FBQyxJQUFJLEdBQUcsb0NBQW9DLENBQUMsQ0FBQztBQUN2RCxTQUFTLENBQUMsSUFBSSxHQUFHLDZDQUE2QyxDQUFDLENBQUM7QUFDaEUsU0FBUyxDQUFDLElBQUksR0FBRywrQkFBK0IsQ0FBQyxDQUFDO0FBRWxELE1BQU0sQ0FBQyxNQUFNLEdBQUc7SUFFWixJQUFJLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0RCxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNuRCxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFFckQsSUFBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQztRQUN2QixNQUFNLEdBQUcsSUFBSSxDQUFDO0tBQ2pCO0lBRUQsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUzRCwyQkFBMkI7SUFDM0IsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4QyxVQUFVLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztJQUN2QyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQztJQUM3QyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQztJQUM5QyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7SUFFOUIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxVQUFVLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztJQUUvQiwyQ0FBMkM7SUFDM0Msa0VBQWtFO0lBR2xFLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUNsQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDL0IsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ2xDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUUvQixNQUFNLENBQUMsYUFBYSxHQUFHLGtDQUFrQyxDQUFDO0lBQzFELFNBQVMsQ0FBQyxJQUFJLEdBQUcsbUNBQW1DLENBQUMsQ0FBQztJQUN0RCxTQUFTLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBRUYsU0FBUyxTQUFTLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJO0lBQ2xDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsSUFBSSxRQUFRLEVBQUU7UUFDVixNQUFNLENBQUMsTUFBTSxHQUFHO1lBQ1osMEJBQTBCO1FBQzlCLENBQUMsQ0FBQztLQUNMO0lBRUQsSUFBSSxJQUFJLEVBQUU7UUFDTixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUN0QjtJQUVELE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBRWpCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxHQUFHO0lBQ25CLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLElBQUksQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDO0lBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO0lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxubGV0IGJhc2UgPSBcImh0dHBzOi8vZW1iZWQubGVhcm5qLmRlL2luY2x1ZGUvXCI7XG5cbi8vIGluY2x1ZGVKcyhcImxpYi9tb25hY28tZWRpdG9yL2Rldi92cy9lZGl0b3IvZWRpdG9yLm1haW4uanNcIik7XG4vLyBpbmNsdWRlSnMoXCJsaWIvbW9uYWNvLWVkaXRvci9kZXYvdnMvZWRpdG9yL2VkaXRvci5tYWluLm5scy5kZS5qc1wiKTtcbmluY2x1ZGVKcyhiYXNlICsgXCJsaWIvcGl4aWpzL3BpeGkuanNcIik7XG5pbmNsdWRlQ3NzKGJhc2UgKyAnanMud2VicGFjay9qYXZhT25saW5lRW1iZWRkZWQuY3NzJyk7XG5pbmNsdWRlSnMoYmFzZSArIFwibGliL2pxdWVyeS9qcXVlcnktMy4zLjEuanNcIik7XG5pbmNsdWRlSnMoYmFzZSArIFwibGliL21hcmtkb3duaXQvbWFya2Rvd25pdC5taW4uanNcIik7XG5pbmNsdWRlSnMoYmFzZSArIFwibGliL21vbmFjby1lZGl0b3IvZGV2L3ZzL2xvYWRlci5qc1wiKTtcbmluY2x1ZGVKcyhiYXNlICsgXCJqcy9ydW50aW1lbGlicmFyeS9ncmFwaGljcy9TcHJpdGVMaWJyYXJ5LmpzXCIpO1xuaW5jbHVkZUpzKGJhc2UgKyBcImxpYi9ob3dsZXIvaG93bGVyLmNvcmUubWluLmpzXCIpO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICBcbiAgICBsZXQgc2NyaXB0UG9zaXRpb24gPSB3aW5kb3cuam9fZG9jLmluZGV4T2YoJzxzY3JpcHQnKTtcbiAgICBsZXQgc2NyaXB0cyA9IHdpbmRvdy5qb19kb2Muc3Vic3RyKHNjcmlwdFBvc2l0aW9uKTtcbiAgICBsZXQgY29uZmlnID0gd2luZG93LmpvX2RvYy5zdWJzdHIoMCwgc2NyaXB0UG9zaXRpb24pO1xuICAgIFxuICAgIGlmKGNvbmZpZy5pbmRleE9mKCd7JykgPCAwKXtcbiAgICAgICAgY29uZmlnID0gXCJ7fVwiO1xuICAgIH1cbiAgICBcbiAgICBsZXQgaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdO1xuICAgIGxldCBib2R5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG4gICAgXG4gICAgLyoqIEB0eXBlIEhUTUxEaXZFbGVtZW50ICovXG4gICAgbGV0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2phdmEtb25saW5lJyk7XG4gICAgZGl2RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWphdmEtb25saW5lXCIsIGNvbmZpZyk7XG4gICAgZGl2RWxlbWVudC5zdHlsZS5tYXJnaW4gPSBcIjAgMCAwIDE1cHhcIjtcbiAgICBkaXZFbGVtZW50LnN0eWxlLndpZHRoID0gXCJjYWxjKDEwMCUgLSA0MHB4KVwiO1xuICAgIGRpdkVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gXCJjYWxjKDEwMCUgLSA0NXB4KVwiO1xuICAgIGRpdkVsZW1lbnQuc3R5bGUudG9wID0gXCIxNXB4XCI7XG4gICAgXG4gICAgYm9keUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2RWxlbWVudCk7XG4gICAgZGl2RWxlbWVudC5pbm5lckhUTUwgPSBzY3JpcHRzO1xuXG4gICAgLy8gZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSB3aW5kb3cuam9fZG9jO1xuICAgIC8vIGRpdkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdqYXZhLW9ubGluZScpWzBdO1xuXG5cbiAgICBodG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICBodG1sRWxlbWVudC5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcbiAgICBcbiAgICB3aW5kb3cuamF2YU9ubGluZURpciA9IFwiaHR0cHM6Ly9lbWJlZC5sZWFybmouZGUvaW5jbHVkZS9cIjtcbiAgICBpbmNsdWRlSnMoYmFzZSArIFwianMud2VicGFjay9qYXZhT25saW5lLWVtYmVkZGVkLmpzXCIpO1xuICAgIGluY2x1ZGVKcyhiYXNlICsgXCJsaWIvcDUuanMvcDUuanNcIik7XG59O1xuXG5mdW5jdGlvbiBpbmNsdWRlSnMoc3JjLCBjYWxsYmFjaywgdHlwZSkge1xuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vZG8gc3R1ZmYgd2l0aCB0aGUgc2NyaXB0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGUpIHtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSB0eXBlO1xuICAgIH1cblxuICAgIHNjcmlwdC5zcmMgPSBzcmM7XG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59XG5cbmZ1bmN0aW9uIGluY2x1ZGVDc3Moc3JjKSB7XG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgbGluay5ocmVmID0gc3JjO1xuICAgIGxpbmsubWVkaWEgPSAnYWxsJztcbiAgICBoZWFkLmFwcGVuZENoaWxkKGxpbmspO1xufSJdfQ==