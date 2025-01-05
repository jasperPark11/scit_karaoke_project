document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search'); // 검색창
    const searchResults = document.getElementById('searchResults'); // 검색 결과 창

    const data = [
        "아이유 - 너의 의미",
        "BTS - Dynamite",
        "블랙핑크 - How You Like That",
        "뉴진스 - Ditto",
        "아이유 - 밤편지",
        "BTS - Butter"
    ];

    // 입력 이벤트 처리
    searchInput.addEventListener('keyup', function () {
        const query = searchInput.value.toLowerCase(); // 입력된 값
        searchResults.innerHTML = ''; // 이전 검색 결과 초기화

        if (query) {
            const filteredData = data.filter(item => item.toLowerCase().includes(query)); // 필터링된 결과

            if (filteredData.length > 0) {
                filteredData.forEach(item => {
                    const resultItem = document.createElement('p');
                    resultItem.textContent = item;
                    resultItem.addEventListener('click', () => {
                        searchInput.value = item; // 선택된 값 삽입
                        searchResults.style.display = 'none'; // 결과 창 숨김
                    });
                    searchResults.appendChild(resultItem);
                });
                searchResults.style.display = 'block'; // 결과 창 표시
            } else {
                searchResults.style.display = 'none'; // 결과 없음
            }
        } else {
            searchResults.style.display = 'none'; // 입력값이 없으면 숨김
        }
    });

    // 외부 클릭 시 결과 창 닫기
    window.addEventListener('click', function (event) {
        if (!searchResults.contains(event.target) && event.target !== searchInput) {
            searchResults.style.display = 'none';
        }
    });



    //modal
    const addButtons = document.querySelectorAll('.icon-btn.add'); // .add 버튼들
    const modal = document.getElementById('modal'); // 모달 창
    const closeModal = document.getElementById('closeModal'); // 닫기 버튼

    // .add 버튼 클릭 시 모달 열기
    addButtons.forEach(button => {
        button.addEventListener('click', function () {
            modal.style.display = 'flex'; // 모달을 flex로 표시
        });
    });

    // 모달 닫기 버튼 클릭 시 모달 닫기
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none'; // 모달을 숨김
    });

    // 모달 외부 클릭 시 닫기
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // 모달을 숨김
        }
    });

});