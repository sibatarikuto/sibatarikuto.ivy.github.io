  jQuery(function ($) {
        // sample のアニメーション設定
        $(".sample").textillate({
            autoStart: true, // 自動でアニメーションを開始
            in: {
                effect: 'fadeIn', // フェードインアニメーション
                delay: 50, // 各文字の遅延時間
                sync: false, // 各文字を個別にアニメーション
            },
            out: {
                effect: 'none', // アウトアニメーションを無効
            },
            loop: false, // 繰り返さない
        });

        // sample2 のアニメーション設定 (5秒後に表示して開始)
        setTimeout(function () {
            $(".sample2").css("display", "block"); // 表示する
            $(".sample2").textillate({
                autoStart: true, // 自動でアニメーションを開始
                in: {
                    effect: 'fadeIn', // フェードインアニメーション
                    delay: 50, // 各文字の遅延時間
                    sync: false, // 各文字を個別にアニメーション
                },
                out: {
                    effect: 'none', // アウトアニメーションを無効
                },
                loop: false, // 繰り返さない
            });
        }, 5000); // 5000ミリ秒（5秒）
    });
