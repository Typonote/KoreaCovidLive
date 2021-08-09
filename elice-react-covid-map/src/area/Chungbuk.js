import React from "react";

function Chungbuk({ fill, onClick, onMouseOver, onMouseLeave }) {
  return (
    <polyline
      id="충북"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      strokeMiterlimit="1"
      points="216.028,454.032 216.931,451.217   219.054,449.956 218.271,448.145 217.855,447.183 218.065,445.928 218.065,445.928 218.291,444.577 218.571,442.901   219.054,440.016 216.784,437.166 208.818,433.65 206.063,432.953 206.254,431.611 206.638,430.845 206.446,430.271 206.254,430.078   206.254,430.078 206.738,428.5 206.738,427.204 206.738,427.204 205.754,425.965 204.928,424.925 203.955,424.712 204.122,423.91   204.122,423.91 203.685,422.798 202.934,420.886 203.378,422.018 202.487,419.749 204.721,418.964 205.104,418.773 205.68,417.24   205.871,417.048 206.063,416.856 206.446,414.94 206.638,414.173 206.638,413.981 203.571,412.257 204.913,409.957 205.871,409.382   206.063,409.19 206.254,408.999 206.638,408.424 206.446,407.466 207.021,404.783 208.171,404.399 208.171,404.399 208.554,404.208   208.554,404.016 208.938,403.633 209.129,403.25 209.513,402.866 210.279,402.674 210.471,402.674 210.663,403.058 210.854,403.25   212.004,403.25 212.195,402.866 212.195,402.483 212.195,402.291 211.812,401.333 211.621,400.183 211.046,399.417 211.237,399.227   211.237,399.035 217.178,396.544 218.328,397.119 222.736,399.8 223.311,399.417 223.694,398.652 224.078,398.46 224.461,397.502   225.799,397.311 225.228,395.394 224.844,394.819 224.269,394.052 222.544,392.711 221.586,391.752 221.778,391.369   221.969,388.303 221.011,386.961 220.82,386.77 220.437,386.578 219.861,386.003 219.287,385.428 218.711,385.237 215.07,383.128   215.07,382.554 214.878,382.362 214.495,382.17 213.92,381.979 212.771,382.17 212.387,381.979 211.621,381.979 211.237,381.979   211.046,381.404 211.237,380.829 211.046,380.445 211.046,380.254 211.429,378.912 211.429,378.337 211.429,377.571   211.429,377.379 210.663,376.229 210.087,376.038 208.938,376.038 208.554,375.846 208.363,375.846 207.404,376.229   207.213,376.038 206.638,374.313 206.83,374.121 207.021,373.93 207.021,372.59 206.83,371.057 206.638,370.482 205.871,370.099   205.296,369.523 205.104,369.332 203.571,368.374 203.955,367.607 204.338,367.032 204.721,366.84 204.721,366.649 205.296,365.499   205.296,365.307 205.488,364.924 205.68,364.349 205.871,363.966 205.68,363.583 205.488,363.391 205.488,363.199 205.296,362.816   205.104,362.625 205.104,362.241 204.913,361.858 204.53,360.899 205.296,360.899 205.296,360.899 206.254,360.899 206.446,360.899   207.021,360.708 207.596,360.516 207.788,360.516 207.979,359.941 207.979,359.75 208.363,359.75 208.746,359.75 208.938,359.558   209.129,359.366 209.321,359.558 209.896,359.366 210.471,359.175 210.663,358.792 211.046,358.408 211.237,358.408   211.812,358.025 212.579,357.642 212.579,357.258 213.154,356.492 213.154,356.492 213.537,356.108 213.537,356.108   214.112,355.917 214.687,356.3 215.07,357.066 215.262,356.683 215.837,356.683 216.22,356.683 216.604,356.683 216.987,356.683   218.328,356.492 218.328,356.3 218.52,356.108 218.711,355.533 218.711,355.533 218.903,354.575 219.478,354.383 220.053,353.425   220.82,353.233 221.203,353.425 221.586,353.425 221.586,353.425 221.969,353.425 222.353,352.851 222.544,352.659 222.353,352.467   221.969,352.084 221.778,351.701 221.586,351.317 221.203,350.553 221.011,350.361 220.628,350.169 219.861,349.786 219.67,349.211   219.67,349.211 219.861,348.828 220.245,348.636 220.437,348.061 220.82,347.294 220.82,346.911 221.203,346.145 222.353,345.953   224.461,345.761 227.527,345.187 228.481,344.611 228.481,344.42 229.061,343.461 229.631,343.27 230.21,343.27 231.931,341.354   231.931,339.054 232.314,338.287 232.123,337.329 232.89,335.604 233.081,335.413 233.464,335.221 235.381,334.454 237.106,334.263   238.255,335.029 241.13,334.263 242.664,333.688 243.047,333.879 244.771,333.879 245.73,334.646 247.646,335.796 249.754,336.371   250.138,335.987 251.671,330.813 253.012,329.663 254.737,330.046 256.845,328.896 256.462,328.513 256.462,328.513 256.271,328.13   256.271,327.555 256.845,327.363 258.378,327.172 258.762,326.98 258.953,326.789 259.72,326.213 259.912,326.022 260.295,325.639   260.87,325.449 261.445,325.065 261.828,324.682 262.02,324.107 262.02,321.999 262.02,319.699 262.02,318.933 262.211,317.783   262.02,314.908 261.636,314.142 261.445,313.95 261.253,313.375 261.062,312.992 264.319,313.567 264.703,313.95 265.278,314.333   265.469,314.525 271.219,316.633 275.243,307.817 277.731,306.284 280.797,299.579 281.181,299.387 280.989,299.962   280.605,301.112 280.797,301.687 280.989,302.262 281.181,303.026 281.372,303.793 281.564,304.751 281.755,305.326   281.947,306.667 282.139,307.434 282.331,308.201 283.097,309.542 283.289,309.925 283.48,310.5 283.864,311.075 284.247,311.458   284.438,311.842 285.972,312.8 286.738,312.992 287.122,313.184 287.313,313.375 287.696,313.567 287.696,313.758 287.888,313.95   288.271,314.333 288.271,314.525 288.846,314.525 289.229,314.333 290.955,314.333 292.104,314.142 293.254,313.95 293.638,313.567   294.212,313.184 294.404,312.992 297.854,312.8 299.195,311.075 302.453,310.309 310.502,309.734 312.228,308.775 312.994,304.368   311.652,298.237 313.568,294.021 314.91,293.446 316.635,292.296 318.359,291.338 319.701,290.379 321.426,290.188 322.764,290.955   323.53,290.955 323.912,290.955 325.445,291.721 326.212,292.487 327.361,294.212 328.707,296.704 329.09,297.087 330.623,299.003   330.24,299.962 329.856,300.153 330.24,304.368 331.961,304.56 332.728,304.56 337.71,303.218 340.776,302.07 341.738,301.687   342.505,301.112 342.693,300.92 343.46,299.77 344.038,299.195 345.376,297.47 344.609,296.512 344.805,296.32 346.722,295.937   348.255,296.896 350.938,298.812 352.275,299.195 352.471,299.003 352.854,298.62 353.809,295.937 353.809,295.17 354.771,294.404   355.342,294.021 355.537,293.829 358.024,292.104 358.791,291.721 359.175,291.721 359.754,292.296 360.903,293.254 363.97,296.129   364.924,295.937 365.69,296.32 366.652,295.746 368.569,299.003 373.928,298.62 376.04,298.237 376.807,297.854 376.994,297.662   378.527,297.662 380.061,298.237 380.639,298.812 380.061,301.495 379.872,301.878 375.656,304.751 375.273,305.326   370.479,308.775 369.336,310.309 369.907,311.458 370.674,312.992 371.44,313.567 371.628,313.95 374.694,315.866 375.077,315.866   375.273,315.675 376.807,314.142 378.339,312.992 378.527,312.992 378.723,312.992 378.91,312.8 380.061,311.842 380.443,312.225   380.827,312.034 381.405,310.884 382.172,311.267 382.743,311.458 383.322,310.884 387.922,311.65 388.493,311.267 389.071,310.5   389.455,310.117 389.643,310.5 390.604,311.267 390.988,311.458 392.904,314.333 392.521,315.675 392.709,317.016 395.775,318.933   400.375,321.041 403.637,320.658 406.319,320.083 406.508,319.508 407.086,318.741 407.657,318.166 408.236,318.166 409.77,318.549   409.957,318.741 410.536,319.316 410.724,319.316 411.107,319.508 411.686,319.891 411.874,320.466 411.49,322.958 411.874,322.958   412.257,322.574 412.641,322.191 413.219,321.808 413.79,322.191 414.752,322.382 414.94,322.574 415.323,322.766 415.52,323.532   416.09,324.682 417.239,325.065 418.194,325.449 418.577,325.449 419.729,324.874 420.11,324.491 420.877,324.874 421.261,325.257   421.839,325.449 422.027,325.639 423.177,326.022 424.521,326.597 424.71,326.789 424.905,326.98 425.094,326.98 425.672,326.405   425.86,326.213 426.822,326.022 427.395,326.789 427.589,327.363 428.927,326.405 429.122,326.213 429.505,325.83 429.505,325.83   429.889,325.639 430.46,325.065 430.843,325.449 430.843,325.639 431.227,326.022 431.422,327.555 431.805,327.938 431.993,327.938   432.188,328.13 432.955,328.13 433.143,328.322 433.909,328.513 434.104,328.705 434.488,328.896 434.871,329.088 435.255,329.472   435.059,329.854 434.871,330.046 434.488,330.238 434.292,330.43 433.909,331.58 433.909,331.771 432.955,332.346 433.143,332.538   433.143,332.729 432.759,333.496 432.376,334.454 431.422,334.837 431.227,334.454 431.038,334.071 430.271,333.496   430.076,333.113 429.505,332.921 429.31,332.729 427.972,332.921 427.972,333.113 427.972,334.454 427.972,334.454 425.86,334.646   423.943,334.454 423.756,334.646 423.561,335.029 423.177,335.604 422.989,336.179 421.645,336.179 421.072,336.754   421.456,338.479 421.645,338.67 422.223,339.054 422.027,340.012 421.839,340.778 421.456,340.97 421.261,341.162 421.072,341.545   420.689,341.545 419.923,342.503 419.539,342.503 419.344,342.695 417.811,344.995 417.623,345.187 416.855,345.57 412.257,348.828   412.069,349.02 410.919,350.361 409.574,351.127 409.19,351.317 403.824,355.15 402.486,358.216 400.57,361.283 400.758,361.666   399.225,366.074 399.037,366.266 397.888,368.182 397.504,369.715 400.188,371.632 400.758,372.207 400.953,372.398   387.538,386.578 386.576,386.387 385.81,385.812 379.677,383.512 378.144,381.404 376.04,379.871 375.077,378.721 367.036,372.207   366.652,372.207 366.27,371.823 366.27,371.632 366.074,371.823 365.886,372.59 365.308,373.356 365.119,373.548 364.924,373.738   365.119,374.121 364.924,375.654 365.119,376.038 365.503,376.229 364.736,376.996 363.586,376.996 362.624,376.996   362.053,376.804 361.475,376.612 361.475,377.763 361.475,377.954 361.67,379.679 361.857,381.212 362.053,382.554 362.438,383.895   362.053,384.47 360.137,384.087 359.558,383.895 358.791,383.704 357.454,383.704 356.875,383.512 356.108,383.32 355.537,382.937   355.154,382.745 354.959,382.745 354.771,382.745 354.388,382.745 353.237,382.937 352.275,382.554 351.704,382.362   351.126,381.787 350.742,381.404 350.171,381.212 349.788,381.021 349.788,380.637 348.826,380.062 348.442,380.062   347.676,380.829 347.488,381.787 347.293,381.787 345.955,382.554 345.955,382.554 344.422,383.32 343.843,383.895 343.843,384.278   343.655,384.854 343.271,386.195 343.076,386.387 342.693,386.387 342.31,386.195 341.738,386.387 341.355,386.77 340.776,386.77   340.776,386.961 340.776,387.536 340.206,388.111 339.822,387.92 339.439,387.728 339.439,387.345 339.439,387.345 339.056,386.195   338.86,386.003 338.673,385.812 338.094,385.62 337.906,385.045 337.522,384.854 337.14,384.47 336.943,384.47 336.561,384.087   336.561,384.087 336.178,383.895 335.223,383.895 335.223,384.47 334.84,385.812 334.645,386.195 334.261,386.387 334.261,386.387   334.456,386.961 334.645,387.728 334.645,387.92 334.073,389.453 333.878,389.645 333.689,390.028 333.307,390.411 332.728,391.178   332.923,391.752 332.728,391.944 332.728,392.711 332.345,393.861 332.156,394.244 332.156,394.436 331.773,395.011   331.578,395.585 331.39,395.969 330.813,396.735 330.813,396.735 330.623,397.119 330.623,397.311 331.007,399.035 331.39,399.227   331.773,399.608 331.961,399.8 332.54,400.566 332.923,400.758 333.494,400.95 334.073,401.524 334.645,402.291 334.645,402.483   335.411,402.674 335.606,403.058 335.794,403.25 336.178,403.441 336.561,403.824 337.14,404.591 337.522,405.549 337.906,405.933   337.522,406.891 337.522,407.274 336.943,407.083 336.561,407.083 335.989,407.083 334.261,407.274 333.494,406.891   333.111,406.699 332.923,406.507 332.54,406.124 332.345,405.933 331.961,405.741 331.578,405.549 331.194,405.357 330.623,404.783   329.278,404.208 329.09,404.016 329.09,403.824 328.707,403.25 328.323,403.058 327.745,403.058 327.174,402.483 326.79,402.866   326.595,403.058 325.828,404.783 325.257,405.166 324.107,405.357 323.726,405.166 322.959,405.166 322.576,404.974   322.381,404.783 321.997,404.591 321.614,404.399 321.426,404.208 320.852,403.633 320.659,403.441 320.468,403.058   320.276,402.483 319.701,402.291 319.51,402.1 319.318,401.908 318.935,401.524 318.359,401.142 317.977,401.524 317.785,401.716   317.401,403.25 317.21,404.208 316.635,404.974 316.443,406.891 316.443,407.083 316.443,407.274 316.252,407.849 315.677,407.849   314.91,407.657 314.144,407.849 314.144,407.849 313.761,407.657 313.568,408.424 313.568,408.807 313.568,409.382 313.568,410.34   313.186,410.915 312.802,411.107 312.419,410.915 312.035,410.724 311.077,410.34 310.694,410.34 310.502,410.532 310.311,410.532   310.119,410.532 309.353,410.532 308.969,410.34 307.436,410.34 307.244,410.149 306.669,410.724 305.903,410.915 305.903,411.107   305.712,411.682 305.328,411.682 305.136,411.682 304.944,411.682 305.136,412.065 304.37,413.407 304.563,413.598 304.944,413.598   305.136,413.215 305.52,413.407 306.286,413.215 306.286,413.023 306.478,412.832 306.861,412.832 307.244,412.832 307.436,412.832   308.011,412.832 308.777,413.215 309.928,413.598 310.694,414.173 311.077,414.94 311.269,415.707 312.61,415.515 313.186,416.09   313.761,416.281 313.568,416.856 313.568,417.24 313.568,418.39 313.568,418.581 314.335,418.964 314.527,419.156 314.719,419.348   314.91,419.731 314.91,420.498 314.527,420.881 314.335,421.264 314.527,422.987 314.335,423.179 313.952,424.137 313.952,424.712   313.952,425.479 313.761,426.437 313.377,426.628 312.994,426.628 312.61,427.012 312.419,428.736 312.035,429.312 310.886,428.928   311.077,427.97 311.077,427.586 310.694,426.82 310.502,426.437 310.311,426.245 310.119,425.67 310.119,425.095 309.735,424.712   308.969,424.329 308.395,424.521 307.436,424.329 307.053,424.329 306.478,424.137 306.286,422.987 306.478,422.412   306.478,422.221 305.52,421.072 305.136,420.498 305.136,419.54 304.753,418.006 304.37,418.198 303.986,418.39 303.603,419.731   303.22,420.306 302.837,421.072 302.646,421.456 302.453,421.837 302.069,421.837 302.069,422.029 300.92,423.179 300.536,423.179   300.345,423.179 300.153,422.987 299.962,423.179 299.195,423.179 299.387,423.754 299.387,424.521 299.195,424.903   299.387,425.287 299.771,426.053 299.962,426.245 300.345,426.437 301.304,427.586 301.112,427.586 299.387,427.778 299.387,427.97   298.62,428.353 298.429,428.545 298.046,428.545 297.854,428.545 297.47,428.353 297.087,428.162 296.704,427.778 296.129,427.97   295.938,427.97 295.554,427.97 295.171,427.778 294.979,428.353 294.404,428.736 294.021,428.545 293.638,428.545 293.446,428.928   292.679,429.312 292.488,429.503 292.296,429.695 291.529,429.886 290.763,432.187 291.146,432.761 291.146,433.528   291.721,433.719 292.296,434.486 294.021,435.062 294.404,435.636 297.087,436.21 297.278,436.402 298.62,436.786 299.003,436.786   299.387,436.594 299.771,436.402 300.345,436.594 300.92,436.786 301.495,436.977 301.878,437.36 302.646,437.937 302.837,438.127   303.028,438.702 303.603,439.085 303.795,440.043 303.603,440.619 303.603,441.385 303.603,441.769 304.37,443.876 304.563,444.068   305.712,444.26 306.286,444.452 306.669,444.643 306.861,444.835 307.244,445.026 307.628,445.026 308.011,445.026 308.586,445.41   308.586,446.176 308.586,446.368 308.969,448.666 308.969,449.049 309.353,450.391 309.161,450.582 308.969,450.774   308.011,451.732 307.244,452.499 306.669,452.69 306.669,452.882 304.563,452.882 304.37,452.69 303.986,454.224 304.944,455.565   305.328,456.14 304.944,458.631 304.944,458.823 305.136,459.206 305.52,459.781 305.328,459.973 305.328,460.548 305.136,460.548   304.944,461.889 304.753,462.272 304.37,462.464 304.179,463.039 304.37,464.381 304.179,464.572 304.37,466.489 305.328,467.063   305.52,467.447 305.712,467.831 305.328,468.789 305.136,469.172 304.753,469.363 304.753,469.555 304.179,470.703 303.986,471.853   303.795,471.853 302.837,472.236 302.646,473.194 303.22,474.728 303.795,474.728 304.37,474.728 304.563,474.728 305.136,475.494   305.136,476.453 305.52,476.644 305.903,478.177 305.903,478.369 305.712,478.562 305.328,478.944 305.52,478.944 306.286,480.094   306.669,480.669 307.053,480.86 307.244,481.244 307.244,481.244 307.244,482.01 306.861,482.202 306.286,482.969 306.286,483.543   306.095,483.735 305.903,483.927 305.712,484.501 305.52,484.501 305.136,484.501 304.944,484.501 304.753,484.501 304.563,484.501   303.986,484.693 303.411,485.843 302.262,486.418 302.262,486.993 302.069,486.993 301.878,486.993 301.112,487.568 300.536,487.76   300.536,488.334 300.153,489.868 299.771,490.251 299.195,491.401 299.003,491.593 298.813,491.976 299.195,492.934   299.195,492.934 299.387,493.317 299.771,494.467 299.579,494.851 299.579,495.042 299.771,495.999 300.153,496.382   300.153,496.765 300.345,498.106 300.345,498.49 300.536,499.256 300.536,499.448 300.536,499.64 301.688,499.065 302.646,499.256   305.52,499.448 305.903,499.64 306.478,499.065 307.436,495.999 308.395,494.851 308.777,494.275 309.544,493.701 309.928,494.851   310.119,496.382 310.119,496.957 310.502,497.34 310.694,497.34 310.694,497.532 311.077,497.723 313.186,498.49 313.377,498.49   314.335,498.682 314.719,499.065 314.91,499.832 315.868,500.79 316.252,500.981 316.635,500.981 316.827,500.981 317.21,500.981   317.21,501.748 318.935,503.665 318.935,503.665 319.318,504.048 319.893,504.048 320.468,504.239 320.659,504.431 321.426,504.048   321.81,504.048 322.576,503.665 322.381,502.898 322.764,502.131 322.959,501.748 323.53,501.556 324.107,501.556 324.679,501.365   325.063,500.981 325.641,500.79 326.212,500.981 326.595,500.79 326.79,500.598 326.979,500.215 327.361,500.215 327.557,500.023   327.94,499.832 328.323,500.023 328.707,500.406 329.661,500.79 330.045,500.79 330.813,501.173 331.007,501.365 331.578,501.556   331.578,501.938 332.345,502.131 333.111,502.515 333.878,502.706 334.456,502.898 334.261,503.281 334.073,503.856   333.689,504.048 333.111,504.239 332.923,504.623 332.54,505.198 332.345,505.389 332.345,505.581 332.345,505.964 331.773,506.348   331.39,506.539 331.578,506.922 332.156,508.072 333.111,508.839 333.111,509.222 333.111,510.18 333.494,511.139 333.878,511.522   334.645,511.713 334.84,511.713 335.027,513.438 335.411,514.013 335.794,514.396 335.794,514.588 337.14,515.163 336.561,515.163   335.989,514.972 335.223,514.972 334.84,515.354 334.456,515.354 334.456,515.738 334.073,515.93 333.878,515.93 333.689,515.93   333.307,516.313 332.923,516.313 332.923,516.122 332.345,515.354 332.156,515.163 331.578,514.78 331.194,514.588 330.813,514.013   330.623,513.822 329.856,513.63 328.707,513.247 328.323,513.247 327.94,513.247 327.94,513.247 327.557,513.055 326.79,513.822   325.445,514.588 325.063,515.163 323.726,515.354 323.343,515.546 322.959,515.546 323.147,515.93 322.959,516.313 322.576,516.696   322.192,517.654 322.192,517.846 322.576,518.419 322.764,518.803 323.343,519.761 323.726,520.144 323.53,520.527 323.53,521.485   324.107,522.061 324.295,522.252 324.679,522.635 324.679,523.21 325.257,524.168 326.023,524.744 325.641,525.127 324.874,525.51   324.679,526.085 324.49,526.277 324.295,526.468 324.295,526.468 324.107,527.043 324.295,528.193 324.49,529.535 324.295,529.727   324.295,530.301 323.912,530.685 322.959,531.259 322.764,531.643 321.23,532.218 320.659,532.601 320.852,534.134 321.043,534.901   321.043,535.284 320.852,535.667 320.659,536.051 320.468,536.242 319.893,537.392 319.318,537.584 319.318,538.542 319.51,539.309   319.701,539.5 320.085,541.225 319.318,543.333 318.743,543.715 318.552,543.715 318.168,544.673 317.977,545.246 317.21,545.825   317.21,545.825 317.019,545.825 316.635,546.208 316.252,546.396 316.061,546.591 315.868,546.975 315.677,546.975 314.91,547.162   313.952,546.591 313.952,546.591 312.994,546.396 312.994,546.396 312.802,546.396 312.228,546.396 310.886,547.545   310.502,547.929 310.119,548.695 308.969,549.845 308.395,549.845 308.202,550.041 306.861,550.808 306.669,551.573   306.669,551.573 306.669,551.762 306.669,551.957 306.478,552.341 306.286,552.528 305.903,552.911 305.52,553.106 304.563,552.911   303.411,552.528 303.22,552.146 303.028,551.762 303.028,551.762 302.837,551.378 302.453,551.19 301.688,550.229 301.495,549.845   300.153,549.658 299.387,550.229 298.429,550.424 296.129,551.378 295.938,551.573 294.979,551.957 294.596,552.146   294.212,552.146 293.254,552.341 291.721,552.724 291.721,553.106 291.338,553.49 290.188,555.023 289.421,554.64 288.463,554.64   287.888,554.828 287.505,555.023 286.93,555.407 285.588,555.212 285.397,555.212 285.014,554.828 284.822,554.64 285.205,554.062   285.588,553.679 285.78,553.49 285.588,552.724 285.397,552.724 284.822,552.724 284.438,552.911 284.055,552.911 283.672,552.341   283.48,552.146 283.097,551.762 282.522,551.957 282.331,552.724 281.755,552.724 281.372,551.957 281.181,551.573 280.989,551.378   280.031,551.378 279.839,551.573 279.456,552.528 279.264,552.341 279.076,551.573 278.31,551.573 278.31,551.573 277.926,550.995   277.731,550.808 277.348,550.612 276.964,550.612 276.581,550.808 276.01,550.995 275.814,551.19 275.814,550.995 275.243,550.612   275.243,550.612 274.86,550.424 274.86,549.845 274.477,549.462 274.281,549.462 274.093,548.508 274.093,547.545 274.093,546.975   274.093,546.779 274.093,546.013 274.093,545.825 273.515,545.629 273.327,545.629 272.56,544.863 271.219,546.013 271.027,546.208   270.835,546.396 270.452,546.591 270.26,546.779 269.877,546.975 269.686,547.358 269.877,547.741 270.069,549.462 269.877,549.658   269.11,550.424 267.002,546.396 266.428,546.013 266.236,546.013 266.044,545.629 266.044,545.629 266.044,545.246 265.853,544.673   265.469,544.29 263.169,541.225 263.169,540.842 262.978,540.65 262.786,540.458 260.87,538.734 260.678,538.351 260.678,537.392   260.678,536.625 260.678,535.667 260.87,535.476 260.678,534.901 260.486,534.518 260.103,534.518 259.72,534.134 259.528,533.559   258.378,533.368 257.804,532.984 257.804,532.601 257.612,532.409 257.42,532.026 257.229,531.643 256.271,530.685 255.887,529.918   255.887,529.343 255.887,529.151 255.887,528.385 255.887,527.618 256.079,527.043 256.271,526.468 256.462,525.51 256.654,525.318   257.037,524.744 257.612,524.168 257.42,521.677 257.229,521.294 256.462,520.911 257.037,518.803 256.462,517.654 256.271,517.463   256.271,516.888 256.462,516.313 256.845,515.93 257.037,515.738 257.037,515.354 256.845,513.055 256.845,511.905 256.462,511.713   255.887,511.139 255.695,510.372 255.121,510.372 253.779,508.647 253.204,508.839 252.821,508.839 252.246,508.839   251.671,509.222 248.221,509.03 248.413,508.456 248.604,507.497 248.221,507.306 248.03,507.306 247.646,506.922 247.455,506.922   247.455,506.922 247.263,506.922 246.497,506.348 246.305,505.964 246.305,505.198 245.73,505.198 245.538,505.389 244.197,506.156   243.622,506.729 243.43,506.922 242.664,507.114 241.897,507.306 239.98,507.688 238.831,507.688 238.831,506.729 238.831,506.539   238.064,505.198 238.255,501.365 238.639,499.832 238.831,499.64 239.022,499.256 239.214,499.256 239.405,499.065 239.597,498.682   239.597,497.34 238.831,495.807 238.639,495.425 238.639,494.659 238.447,494.467 239.214,494.275 239.597,493.701 239.597,493.126   239.597,492.934 239.214,492.167 239.405,491.976 239.597,491.593 239.789,490.634 239.98,490.251 240.172,489.868 240.364,489.676   240.555,489.101 240.555,488.718 240.364,486.035 240.747,486.035 241.514,485.651 241.705,485.46 241.322,485.268 241.514,484.31   241.514,484.118 241.705,483.735 242.664,483.352 243.813,482.585 244.197,481.437 244.197,481.052 244.388,480.094 244.58,479.902   244.58,478.944 244.388,478.369 244.388,476.453 244.197,476.069 244.771,475.687 245.538,475.303 245.73,475.111 245.73,474.536   246.113,474.344 247.071,474.536 247.646,474.153 248.221,474.153 248.796,474.344 249.179,474.344 249.563,474.153   249.754,473.771 249.563,473.771 249.371,473.386 249.179,472.62 248.796,472.045 248.604,471.853 248.03,471.278 247.646,470.896   247.455,470.512 247.455,468.979 247.263,468.789 246.497,468.979 246.305,468.979 245.538,469.172 245.538,469.172   244.963,468.979 244.197,468.405 244.005,468.405 243.813,468.405 243.813,468.597 243.43,468.979 243.047,468.789 242.855,468.597   242.664,468.597 242.472,469.555 241.897,471.853 241.705,472.62 241.514,472.236 240.555,471.853 240.364,471.278 239.789,470.128   239.597,469.363 238.831,467.831 238.064,466.489 238.064,466.297 238.064,466.104 238.255,465.339 238.447,464.764   238.831,464.381 239.405,463.806 239.405,463.806 239.597,463.614 239.98,463.422 240.172,463.039 240.364,461.889 240.172,461.506   239.789,461.506 239.022,461.698 238.639,461.698 236.914,461.506 236.339,461.123 236.914,458.438 237.297,457.29 235.956,457.098   235.573,457.098 235.381,457.29 234.806,457.673 234.614,457.865 234.231,458.248 234.231,458.438 234.04,458.823 233.848,459.206   233.656,461.313 233.081,461.889 232.698,462.081 232.506,462.272 232.123,462.464 231.931,462.656 230.21,462.656 229.631,462.081   229.444,461.698 228.865,461.313 228.865,461.313 225.228,461.698 223.502,461.698 222.928,461.313 222.928,461.123   223.119,457.673 223.311,456.715 223.119,455.182 222.928,454.798 222.544,454.415 222.161,454.032 221.969,453.84 221.203,453.457   220.82,452.882 220.437,452.307 219.095,452.499 218.52,453.457 217.37,454.415 216.412,454.032 "
      transform="translate(106.95522,19.462687)"
      style={{
        fill: fill === undefined ? "#cdcccc" : fill,
        fillOpacity: 1,
        stroke: "white",
        strokeMiterlimit: "1",
      }}
    />
  );
}

export default Chungbuk;