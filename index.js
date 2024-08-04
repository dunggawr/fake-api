const express = require('express');
const app = express();
const port = 3001;

// Dữ liệu giả JSON
const fakeData = {
    infomation: {
        hotline: "0936635052",
        message: "Ieltsfocusmode",
        email: "tuvan@ielts-nguyenhuyen.com"
    },
    home: {
        banner: {
            title: "Minimal English",
            slogan: "Học giản đơn, đạt aim hơn!",
            image: {
                image_1: "/images/banner/banner_1.png",
                image_2: "/images/banner/banner_2.jpeg",
                image_3: "/images/banner/banner_3.jpeg",
                image_4: "/images/banner/banner_4.png",
                image_5: "/images/banner/banner_5.jpeg",
                image_6: "/images/banner/banner_6.png",
                image_7: "/images/banner/banner_7.png"
            },
            content: "Minimal English là lớp học IELTS chuyên biệt với mục tiêu giúp học viên đạt mục tiêu trong kỳ thi IELTS thông qua phương pháp học tối giản và hiệu quả. Chúng tôi kết hợp giữa phương pháp Hybrid Learning và sự phân hóa trình độ để cá nhân hóa việc học, đảm bảo mỗi học viên đều nhận được sự chú ý và hỗ trợ tối đa."
        },
        about_us: {
            label: "VỀ MINIMAL ENGLISH",
            title: ["Là nơi khởi nguồn từ", "đam mê và nghị lực"],
            image: {
                image_1: "/images/about/about_1.jpeg",
                image_2: "/images/about/about_2.png",
            },
            content: "Với phương pháp Hybrid Learning, kết hợp giữa học trực tiếp và học trực tuyến, chúng tôi mang đến cho học viên môi trường thân thiện, phương pháp học tập tối giản nhưng hiệu quả. Tại Minimal English, học viên không chỉ học kiến thức mà còn nhận được sự tự tin và động lực để phát triển. Chúng tôi cam kết mang lại chất lượng giảng dạy tốt nhất, giúp học viên đạt được mục tiêu học tập và vượt qua mọi thử thách."
        },
        outstanding_class: {
            label: "LỚP HỌC NỔI BẬT",
            title: "Các lớp học tại Minimal English",
            info_classes: [
                {
                    name: "Lớp Mầm",
                    description: "Lớp Mầm tại Minimal English dành cho những học viên có trình độ đầu vào từ 4.0+. Mục tiêu của lớp học là củng cố ...",
                    image: "/images/class/outstanding_class_1.png"
                },
                {
                    name: "Lớp Rễ",
                    description: "Lớp Rễ được thiết kế cho những học viên có trình độ đầu vào từ 5.0+. Lớp học này tập trung vào việc nâng cao kỹ năng tiếng Anh trung cấp và ...",
                    image: "/images/class/outstanding_class_2.png"
                },
                {
                    name: "Lớp Thân",
                    description: "Lớp Thân dành cho học viên có trình độ đầu vào từ 6.0+. Mục tiêu của lớp học là phát triển các kỹ năng tiếng Anh nâng cao và chuẩn bị kỹ lưỡng cho ...",
                    image: "/images/class/outstanding_class_3.png"
                },
                {
                    name: "Lớp Về Đích",
                    description: "Lớp Về Đích là lớp học miễn phí, dành riêng cho học sinh đã đóng tiền thi IELTS chính thức. Mục đích của lớp học này là hoàn thiện các ...",
                    image: "/images/class/outstanding_class_4.png"
                },
                {
                    name: "Lớp Gốc Ngôn Ngữ",
                    description: "Lớp Gốc Ngôn Ngữ được thiết kế để xây dựng nền tảng và tư duy gốc rễ, vững chắc cho tiếng Anh học thuật. Lớp học này phù hợp cho ...",
                    image: "/images/class/outstanding_class_5.png"
                },
                {
                    name: "Lớp Nhánh chuyên Listening & Reading",
                    description: "Lớp Nhánh chuyên Nghe & Đọc chú trọng vào việc cải thiện kỹ năng Nghe và Đọc dưới áp lực thời gian, giúp học viên phát triển tư duy học kỹ năng ...",
                    image: "/images/class/outstanding_class_6.png"
                },
                {
                    name: "Lớp Nhánh chuyên Writing",
                    description: "Lớp Nhánh chuyên Writing bao gồm ba chuyên đề chính: Tư duy của tiếng Anh học thuật, tư duy của văn miêu tả (Descriptive essay cho bài Task 1), và ...",
                    image: "/images/class/outstanding_class_7.png"
                }
            ]
        },
        testimonial: {
            label: "Phản hồi của học viên/ phụ huynh",
            title: "Phản hồi của học viên/ phụ huynh về Minimal English",
            info_testimonials: [
                {
                    name : "Nguyễn Thảo Uyên",
                    address: "Nam Đàn, Nghệ An",
                    image: "/images/testimonial/2fb3451f2790627112ebba6732cb7a49.jfif",
                    content: "Trước khi được biết tới Minimal English, em chỉ là một học sinh nhút nhát và thiếu tự tin về khả năng tiếng Anh của mình. So với các bạn đồng trang lứa, khả năng tiếng Anh của em kém về mọi mặt, trong khi đó, gia đình em lại không đủ điều kiện cho em đi học thêm như các bạn khác. Bố mẹ em rất buồn và lo lắng cho tương lai của em sau này."
                },
                {
                    name : "Nguyễn Thảo Uyên",
                    address: "Nam Đàn, Nghệ An",
                    image: "/images/testimonial/5511bd0e458c8720e5240409b3476954.jfif",
                    content: "Trước khi được biết tới Minimal English, em chỉ là một học sinh nhút nhát và thiếu tự tin về khả năng tiếng Anh của mình. So với các bạn đồng trang lứa, khả năng tiếng Anh của em kém về mọi mặt, trong khi đó, gia đình em lại không đủ điều kiện cho em đi học thêm như các bạn khác. Bố mẹ em rất buồn và lo lắng cho tương lai của em sau này."
                },
                {
                    name : "Nguyễn Thảo Uyên",
                    address: "Nam Đàn, Nghệ An",
                    image: "/images/testimonial/2fb3451f2790627112ebba6732cb7a49.jfif",
                    content: "Trước khi được biết tới Minimal English, em chỉ là một học sinh nhút nhát và thiếu tự tin về khả năng tiếng Anh của mình. So với các bạn đồng trang lứa, khả năng tiếng Anh của em kém về mọi mặt, trong khi đó, gia đình em lại không đủ điều kiện cho em đi học thêm như các bạn khác. Bố mẹ em rất buồn và lo lắng cho tương lai của em sau này."
                },
                {
                    name : "Nguyễn Thảo Uyên",
                    address: "Nam Đàn, Nghệ An",
                    image: "/images/testimonial/5511bd0e458c8720e5240409b3476954.jfif",
                    content: "Trước khi được biết tới Minimal English, em chỉ là một học sinh nhút nhát và thiếu tự tin về khả năng tiếng Anh của mình. So với các bạn đồng trang lứa, khả năng tiếng Anh của em kém về mọi mặt, trong khi đó, gia đình em lại không đủ điều kiện cho em đi học thêm như các bạn khác. Bố mẹ em rất buồn và lo lắng cho tương lai của em sau này."
                },
                {
                    name : "Nguyễn Thảo Uyên",
                    address: "Nam Đàn, Nghệ An",
                    image: "/images/testimonial/2fb3451f2790627112ebba6732cb7a49.jfif",
                    content: "Trước khi được biết tới Minimal English, em chỉ là một học sinh nhút nhát và thiếu tự tin về khả năng tiếng Anh của mình. So với các bạn đồng trang lứa, khả năng tiếng Anh của em kém về mọi mặt, trong khi đó, gia đình em lại không đủ điều kiện cho em đi học thêm như các bạn khác. Bố mẹ em rất buồn và lo lắng cho tương lai của em sau này."
                },
            ]
        },
        why_us: {
            label: "TẠI SAO CHỌN MINIMAL ENGLISH",
            title: "Lợi ích khi học tại Minimal English",
            image: "/images/why_image.jpeg",
            info_why_us: [
                {
                    title: "Phương pháp học tập Tối Giản",
                    content: ""
                },
                {
                    title: "Giảng viên chuyên nghiệp",
                    content: ""
                },
                {
                    title: "Hỗ trợ tối đa cho học viên",
                    content: ""
                },
                {
                    title: "Chính sách học phí linh hoạt",
                    content: ""
                },
                {
                    title: "Môi trường học thân thiện",
                    content: ""
                },
                {
                    title: "Công nghệ tiên tiến",
                    content: ""
                },
                {
                    title: "Hỗ trợ toàn diện",
                    content: ""
                }
            ]
        },
        videoId: "dQw4w9WgXcQ?si=p96zzuzrY96d-97N"    
    },
    about_us:{
        mission: {
            label: "Sứ mệnh",
            image: "/images/about/IMG_3106.png",
            content: "Minimal English nỗ lực mang đến những khóa học tiếng Anh dễ hiểu, đơn giản và hiệu quả. Chúng tôi tập trung vào tư duy Tối Giản trong cả phương pháp giảng dạy cũng như nội dung bài học được truyền tải, giúp học viên nắm bắt kiến thức một cách dễ dàng và nhanh chóng hơn. Đội ngũ giảng viên giàu kinh nghiệm, tận tâm trong công việc của chúng tôi luôn sẵn sàng hỗ trợ và đồng hành cùng học viên trên con đường chinh phục tiếng Anh. Chúng tôi hướng tới việc giúp học viên cải thiện trình độ tiếng Anh và đạt được những mục tiêu học tập và nghề nghiệp cao hơn.",
        },
        vision: {
            label: "Tầm nhìn",
            image: "/images/about/IMG_2711.png",
            content: "Với tầm nhìn xa và trái tim đầy nhiệt huyết, Minimal English mong muốn trở thành lớp học tiếng Anh hàng đầu, giúp đỡ các em học sinh hiện thực hóa ước mơ. Chúng tôi tin rằng, giáo dục không phải là con đường duy nhất dẫn đến thành công nhưng sẽ là con đường chắc chắn và an toàn nhất. Chúng tôi cam kết lan tỏa phương pháp và giá trị của Minimal English tới nhiều học sinh hơn nữa."
        },
        brand_story: {
            label: "Brand Story",
            description: "Chị Hằng Nga, người sáng lập Minimal English, là minh chứng sống cho việc kiên trì và niềm đam mê có thể dẫn đến những thành công đáng kinh ngạc. Câu chuyện của chị là hành trình đầy cảm hứng về sự vượt lên từ khó khăn và nỗ lực không ngừng để xây dựng một tương lai tốt đẹp hơn.",
            detail_stories: [
                {
                    year: "Khởi đầu",
                    content: "Khởi đầu từ cuộc sống hôn nhân không mấy suôn sẻ ở tuổi 18, chị Hằng Nga đã đối mặt với nhiều thử thách trong 10 năm. Thay vì nản lòng, chị biến khó khăn thành động lực. Ở tuổi 27, sau khi quyết định bắt đầu lại từ đầu, chị theo đuổi đam mê giáo dục. Từ xuất phát điểm IELTS chỉ 3.0, 4.0, chị kiên trì tự học và sau 2-3 tháng, điểm số của chị đã tăng lên 6.5. Vừa chăm sóc con nhỏ, vừa đi dạy thuê tại các trung tâm tiếng Anh, chị còn học thạc sĩ và đạt được chứng chỉ sư phạm."
                },
                {
                    year: "2015",
                    content: "Chị tham gia vào các dự án viết giáo trình và làm giám sát học thuật cho một trung tâm tiếng Anh trong gần 4 năm. Chị Hằng Nga tích lũy được những kinh nghiệm quý báu và viết sách cho Nhà xuất bản Đại học Quốc gia. Cuốn sách của chị được xuất bản và phân phối rộng rãi trên thị trường."
                },
                {
                    year: "2020",
                    content: "Chị mở lớp học tại nhà với mong muốn tạo ra một môi trường học tập thân thiện và hiệu quả. Bắt đầu với chỉ vài học sinh, nhờ sự tín nhiệm của phụ huynh, số lượng học sinh dần tăng lên. Minimal English không chỉ là một lớp học tiếng Anh, mà còn là biểu tượng của sự kiên trì và tinh thần không bỏ cuộc, cũng là nơi chị Hằng Nga truyền đạt những giá trị về sự nhất quán, tối giản nhưng hiệu quả trong học tập."
                }
            ]
        },
        highlights: {
            label: "Điểm nổi bật",
            description: "Chị Hằng Nga, người sáng lập Minimal English, là minh chứng sống cho việc kiên trì và niềm đam mê có thể dẫn đến những thành công đáng kinh ngạc. Câu chuyện của chị là hành trình đầy cảm hứng về sự vượt lên từ khó khăn và nỗ lực không ngừng để xây dựng một tương lai tốt đẹp hơn.",
            lecturers: {
                title: "Giảng viên",
                content: [
                    "Đội ngũ giảng viên đạt trình độ IELTS từ 7.5+ và có kinh nghiệm giảng dạy lâu năm.",
                    "Founder là tác giả sách, được lưu hành rộng rãi trên thị trường.",
                    "Các giảng viên luôn cập nhật phương pháp giảng dạy mới nhất để đảm bảo chất lượng học tập."
                ]
            },
            teaching_methods: {
                title: "Phương pháp giảng dạy",
                content: [
                    "Giảng dạy học viên theo tư lối tư duy tối giản Minimalism",
                    "Áp dụng phương pháp Hybrid Learning, kết hợp học trực tiếp và trực tuyến linh hoạt, không bị phụ thuộc vào vị điểm",
                    "Chương trình học được cá nhân hóa, phân hóa theo trình độ học của từng học viên.",
                    "Sử dụng chung 1 bài giảng. Dễ dàng",
                    "Sử dụng công nghệ tiên tiến như AI và Gamification để hỗ trợ việc học."
                ]
            }
        },
        "lectures": {
            "label":"Giảng viên",
            "description": "Các giảng viên tại Minimal English",
            "detail_lectures": [
                {
                    "year": "Cô Hằng Nga Luna",
                    "content": [
                    "Founder kiêm giảng viên chính",
                    "Tốt nghiệp Thạc sĩ Lý Luận và Phương Pháp Giảng Dạy Tiếng Anh  (MTESOL), Đại học Victoria - Melbourne - Australia cấp năm 2018",
                    "8.0 IELTS Overall ( 8.5 Speaking & 7.5 Writing )",
                    "Tác giả cuốn sách học ngữ pháp nền tảng qua Mindmap",
                    "Tác giả cuốn sách luyện thi IELTS Key Grammar, nhà xuất bản Đại Học Quốc Gia Hà Nội.",
                    "12 năm kinh nghiệm giảng dạy IELTS và tiếng Anh học thuật.",
                    "8 năm kinh nghiệm phát triển khung chương trình Ngữ pháp tiếng Anh cho học viên mọi cấp độ."
                    ]                    
                },
                {                    
                    "year": "Cô Nguyễn Phương",
                    "content": [
                    "Giảng viên",
                    "Tốt nghiệp loại giỏi Đại học ngành Khoa học Quản lý, Đại học KHXH & NV, ĐHQG Hà Nội. Học bổng loại giỏi tất cả các kỳ học.",
                    "Tốt nghiệp ngành Ngôn ngữ Anh, đại học Hà Nội (hệ vừa học vừa làm)",
                    "Học bổng cho Sinh viên tiêu biểu của Quỹ Chungsoo Foundation.",
                    "Giải 3 nghiên cứu Khoa học SV.",
                    "Học bổng ctr Thạc sĩ Quản trị Kinh doanh, Ctrinh đào tạo bằng Tiếng Anh, Đại học Việt Nhật, Đại học Quốc gia Hà Nội.",
                    "Nghiên cứu Sinh tiến sĩ đại học Corvinus University of Budapest ",
                    "Giảng viên tại Đại học Đại Nam 2022 - nay"
                    ]
                },
                {
                    "year": "Đỗ Đức",
                    "content": [
                    "Nhân viên học thuật",
                    "Tốt nghiệp THPT Thăng Long",
                    "Đạt danh hiệu học sinh giỏi trong 3 năm cấp 3, điểm trung bình môn tiếng anh luôn >9.0. Bài thi môn Tiếng Anh THPTQG đạt 9.6.)",
                    "Hiện tại là sinh viên năm 2 trường Đại Học Ngoại Thương, khoa CLC Tiếng Anh Thương Mại.",
                    "Từng làm trợ giảng tại Trung tâm AMES ENGLISH TIMES CITY"
                    ]
                },
                {
                    "year": "Nguyễn Anh Tú",
                    "content": [
                    "Giảng viên Junior",
                    "Tốt nghiệp Cử nhân chuyên ngành Sư phạm, Vietnam University of Fine Arts ",
                    "3 năm kinh nghiệm trong lĩnh vực giáo dục",
                    "1 năm kinh nghiệm giảng dạy và ôn thi tiếng Anh các cấp"                    
                    ]
                },
                {
                    "year": "Sơn Nguyễn",
                    "content": [
                    "Trợ giảng & nhân viên học thuật",
                    "Vinschool Times City Middle School & High School 2016 - 2023: GPA 8.8",
                    "Cử nhân ngành khoa học máy tính (Đại học Công nghệ Swinburne Việt Nam) 2023 - 2026",
                    "Thực tập sinh KITE (Kids Tech), đóng góp vào việc phát triển tài liệu học tập và hỗ trợ giảng viên trong việc chuẩn bị bài giảng cho trẻ em.",
                    "Thực tập sinh tại Đơn vị Hỗ trợ và Chăm sóc Kỹ thuật Khách hàng, Phòng Hỗ trợ Kỹ thuật, GreenCloud (365 Group LLC)."                    
                    ]
                }

            ]
       }
    }
};

// Định nghĩa endpoint
app.get('/api/users', (req, res) => {
    res.json(fakeData);
});

// Lắng nghe tại cổng 3000
app.listen(port, () => {
    console.log(`Fake API đang chạy tại http://localhost:${port}`);
});
