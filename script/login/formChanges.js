// $(function () {
//   const allGroupInputs = $(".input_group input");
//   const allGroupLabels = $(".input_group label");
//   const allGroupSelect = $(".select_group select");
//   const allGroupSelectsLabels = $(".select_group label");
//   const productAddModelBtn = $(".product_add button");

//   const removeActiveLBStyles = () => {
//     allGroupLabels.each((i, item) => {
//       if (allGroupInputs.eq(i).val()) {
//         $(item).addClass("lb_active");
//       } else {
//         $(item)
//           .removeClass("lb_active")
//           .css("animation", "lb_deactive_move_inside 1s");
//       }
//     });
//   };

//   const onEditFormOpen = () => {
//     allGroupLabels.each((i, item) => {
//       console.log("value - ", allGroupInputs.eq(i).val());
//       if (allGroupInputs.eq(i).val()) {
//         $(item).addClass("lb_active");
//       }
//     });
//   };

//   allGroupInputs
//     .on("focus", function (e) {
//       e.preventDefault();
//       removeActiveLBStyles();
//       const index = allGroupInputs.index(this);
//       allGroupLabels.eq(index).css("animation", null).addClass("lb_active");
//     })
//     .on("blur", function (e) {
//       e.preventDefault();
//       removeActiveLBStyles();
//     });

//   allGroupSelect
//     .on("focus", function (e) {
//       e.preventDefault();
//       removeActiveLBStyles();
//       const index = allGroupSelect.index(this);
//       allGroupSelectsLabels
//         .eq(index)
//         .css("animation", null)
//         .addClass("lb_active");
//     })
//     .on("blur", function (e) {
//       e.preventDefault();
//       removeActiveLBStyles();
//     });

//   // $("#productData").on("click", function(e) {
//   // if ($(e.target).hasClass("action_edit")) {
//   // onEditFormOpen();
//   // } else if ($(e.target).hasClass("action_delete")) {
//   // }
//   // });

//   if (productAddModelBtn.length) {
//     productAddModelBtn.on("click", function () {
//       removeActiveLBStyles();
//     });
//   }

//   allGroupInputs.each(function (i, item) {
//     if ($(item).val()) {
//       allGroupLabels.eq(i).addClass("lb_active");
//     }
//   });
// });

$(function () {
  const allGroupInputs = $(".input_group input");
  const allGroupLabels = $(".input_group label");
  const allGroupSelect = $(".select_group select");
  const allGroupSelectsLabels = $(".select_group label");
  const productAddModelBtn = $(".product_add button");

  const removeActiveLBStyles = () => {
    allGroupLabels.each((i, item) => {
      if (allGroupInputs.eq(i).val()) {
        $(item).addClass("lb_active");
      } else {
        $(item)
          .removeClass("lb_active")
          .css("animation", "lb_deactive_move_inside 1s");
      }
    });
  };

  const onEditFormOpen = () => {
    allGroupLabels.each((i, item) => {
      console.log("value - ", allGroupInputs.eq(i).val());
      if (allGroupInputs.eq(i).val()) {
        $(item).addClass("lb_active");
      }
    });
  };

  allGroupInputs
    .on("focus", function (e) {
      e.preventDefault();
      removeActiveLBStyles();
      const index = allGroupInputs.index(this);
      allGroupLabels.eq(index).css("animation", null).addClass("lb_active");
    })
    .on("blur", function (e) {
      e.preventDefault();
      removeActiveLBStyles();
    });

  allGroupSelect
    .on("focus", function (e) {
      e.preventDefault();
      removeActiveLBStyles();
      const index = allGroupSelect.index(this);
      allGroupSelectsLabels
        .eq(index)
        .css("animation", null)
        .addClass("lb_active");
    })
    .on("blur", function (e) {
      e.preventDefault();
      removeActiveLBStyles();
    });

  // $("#productData").on("click", function(e) {
  // if ($(e.target).hasClass("action_edit")) {
  // onEditFormOpen();
  // } else if ($(e.target).hasClass("action_delete")) {
  // }
  // });

  if (productAddModelBtn.length) {
    productAddModelBtn.on("click", function () {
      removeActiveLBStyles();
    });
  }

  allGroupInputs.each(function (i, item) {
    if ($(item).val()) {
      allGroupLabels.eq(i).addClass("lb_active");
    }
  });
});
