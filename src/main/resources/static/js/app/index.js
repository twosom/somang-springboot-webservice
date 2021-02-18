var main = {
    init: function () {
        var _this = this;
        $('#btn-save').on('click', function () {
            _this.save();
        });
        $('#btn-cancel').on('click', function () {
            alert("취소버튼을 누르셨습니다.");
            window.location.href = '/';
        });
        index = (Math.random() * 10) + 1;
        index = Math.round(index);
        $('#sendSampleData').on('click', function () {
            var data = {
                title: 'sampleTitle' + index,
                author: 'sampleAuthor' + index,
                content: 'sampleContent' + index
            };
            $.ajax({
                type: 'POST',
                url: '/api/v1/posts',
                dataType: 'json',
                contentType: 'application/json; charset=UTF-8',
                data: JSON.stringify(data)
            }).done(function () {
                alert(index + '번 샘플 데이터 삽입 완료');
                index = index + 1;
                window.location.href = "/";
            }).fail(function (error) {
                alert(JSON.stringify(error));
            });

        });
    },
    save: function () {
        var data = {
            title: $('#title').val(),
            author: $('#author').val(),
            content: $('#content').val()
        };

        $.ajax({
            type: 'POST',
            url: '/api/v1/posts',
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8',
            data: JSON.stringify(data)
        }).done(function () {
            alert('글이 등록되었습니다.');
            window.location.href = '/';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    }
};

main.init();