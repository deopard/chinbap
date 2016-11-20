$(() => {
    class FullModal {
        constructor() {
            this.initLoading();
        }

        initLoading() {
            let images = board.getImages(new Group(DRAMA_PEOPLE));
            $('#fullModal .loading').html(images);
        }

        show(title, content) {
            this.hideAll();
            $('#fullModal #btnFullModalClose').show();
            $('#fullModal .title').html(title).show();
            $('#fullModal .content').html(content).show();
            $('#fullModal').show();
        }

        showLoading(size) {
            this.hideAll();
            $('#fullModal #btnFullModalClose').hide();

            let picked = _.sampleSize($('#fullModal .loading > img').toArray(), size);
            $('#fullModal .loading > img').hide();
            $(picked).show();
            $('#fullModal .loading').show();
            $('#fullModal').show();
        }

        hideLoading() {
            $('#fullModal .loading').hide();
        }

        hideAll() {
            $('#fullModal .title, #fullModal .content, #fullModal .loading').hide();
        }

        hide() {
            $('#fullModal').hide();
        }
    }

    window.FullModal = FullModal;
});