<script type="text/javascript">
  jQuery.noConflict();
  (function($) {
    $(function() {
      // More code using $ as alias to jQuery

      var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];
      $("#product\\.field3").autocomplete({
        source: availableTags,
        change: function(event, ui) {
          if (!ui.item) {
            $("#product\\.field3").val("");
          }
        }
      });

    });
  })(jQuery);
</script>