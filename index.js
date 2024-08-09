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
                    isComing: false,
                    image: "/images/class/outstanding_class_1.png"
                },
                {
                    name: "Lớp Rễ",
                    description: "Lớp Rễ được thiết kế cho những học viên có trình độ đầu vào từ 5.0+. Lớp học này tập trung vào việc nâng cao kỹ năng tiếng Anh trung cấp và ...",
                    isComing: false,
                    image: "/images/class/outstanding_class_2.png"
                },
                {
                    name: "Lớp Thân",
                    description: "Lớp Thân dành cho học viên có trình độ đầu vào từ 6.0+. Mục tiêu của lớp học là phát triển các kỹ năng tiếng Anh nâng cao và chuẩn bị kỹ lưỡng cho ...",
                    isComing: false,
                    image: "/images/class/outstanding_class_3.png"
                },
                {
                    name: "Lớp Gốc Ngôn Ngữ",
                    description: "Sắp ra mắt trong thời gian tới",
                    isComing: true,
                    image: "/images/class/outstanding_class_5.png"
                },
                {
                    name: "Lớp Nhánh - L/R/S/W",
                    description: "Lớp Về Đích là lớp học miễn phí, dành riêng cho học sinh đã đóng tiền thi IELTS chính thức. Mục đích của lớp học này là hoàn thiện các ...",
                    isComing: false,
                    image: "/images/class/outstanding_class_4.png"
                },
                {
                    name: "COACH 1-1",
                    description: "Sắp ra mắt trong thời gian tới",
                    isComing: true,
                    image: "/images/class/outstanding_class_6.png"
                },
            ]
        },
        testimonial: {
            label: "Phản hồi của học viên/ phụ huynh",
            title: "Phản hồi của học viên/ phụ huynh về Minimal English",
            info_testimonials: [
                {
                    image: "/images/testimonial/1c3cc03d440cbc22e0fa47e9c4d4f6b7.jfif",
                },
                {
                    image: "/images/testimonial/2caa326fe1ffb33b404c80789f0655e4.jfif",
                },
                {
                    image: "/images/testimonial/9fec57db7007ec186ef7e2aab6e6d089.jfif",
                },
                {
                    image: "/images/testimonial/36a8082970b48a7e75cfcd229cb9b4e9.jfif",
                },
                {
                    image: "/images/testimonial/202d7d8dc7696addf43548bd27426cf7.jfif",
                },
                {
                    image: "/images/testimonial/dda8397f1b95bbd70947a6edf7f4057e.jfif",
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
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam id nihil inventore tempore aperiam, doloremque excepturi asperiores veritatis dolore reiciendis. Expedita minus voluptates optio quae corrupti iusto nesciunt praesentium?"
                },
                {
                    title: "Giảng viên chuyên nghiệp",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam id nihil inventore tempore aperiam, doloremque excepturi asperiores veritatis dolore reiciendis. Expedita minus voluptates optio quae corrupti iusto nesciunt praesentium?"
                },
                {
                    title: "Hỗ trợ tối đa cho học viên",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam id nihil inventore tempore aperiam, doloremque excepturi asperiores veritatis dolore reiciendis. Expedita minus voluptates optio quae corrupti iusto nesciunt praesentium?"
                },
                {
                    title: "Chính sách học phí linh hoạt",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam id nihil inventore tempore aperiam, doloremque excepturi asperiores veritatis dolore reiciendis. Expedita minus voluptates optio quae corrupti iusto nesciunt praesentium?"
                },
                {
                    title: "Môi trường học thân thiện",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam id nihil inventore tempore aperiam, doloremque excepturi asperiores veritatis dolore reiciendis. Expedita minus voluptates optio quae corrupti iusto nesciunt praesentium?"
                },
                {
                    title: "Công nghệ tiên tiến",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam id nihil inventore tempore aperiam, doloremque excepturi asperiores veritatis dolore reiciendis. Expedita minus voluptates optio quae corrupti iusto nesciunt praesentium?"
                },
                {
                    title: "Hỗ trợ toàn diện",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam id nihil inventore tempore aperiam, doloremque excepturi asperiores veritatis dolore reiciendis. Expedita minus voluptates optio quae corrupti iusto nesciunt praesentium?"
                }
            ]
        },
        videoId: "dQw4w9WgXcQ?si=YeEEeV8qLMZ9l9Fx"    
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
                    content: "Cuộc hôn nhân không mấy suôn sẻ mang đến cho chị Hằng Nga nhiều thử thách. Ở tuổi 27, chị làm lại từ đầu với niềm đam mê giáo dục. Từ xuất phát điểm IELTS chỉ 3-4.0, chị kiên tri tự học, điểm số của chị đã tăng lên 6.5, tiếp tục cố gắng tới con số 7.5 và sau đó là 8.0 IELTS."
                },
                {
                    year: "2015",
                    content: "Trong quá trình làm giám sát học thuật cho trung tâm tiếng Anh gần 4 năm, chị Hằng Nga tích luỹ được nhiều kinh nghiệm quý báu. Chị viết sách cho Nhà xuất bản Đại học Quốc gia, cuốn sách được xuất bản và phân phối rộng rãi trên thị trường. Đồng thời trong thời gian này chị học tiếp tục lên cao, tới cuối năm 2018, chị đạt bằng Thạc Sĩ MATESSOL của Đại học Victoria - Melbourne - Australia."
                },
                {
                    year: "2020",
                    content: "Chị Hằng Nga mở lớp học tại nhà với mong muốn tạo ra một món ăn đại chúng, giúp đỡ mọi người tiếp cận với IELTS dễ dàng hơn, đơn giản hơn. Bắt đầu với chỉ vài học viên, nhờ sự tín nhiệm của phụ huynh, số lượng học viên dần tăng lên."
                },
                {
                    year: "2020 đến nay",
                    content: "Chị Hằng Nga luôn mang trong mình suy nghĩ 'Nhờ có giáo dục, cuộc đời chị đã thay đổ rất nhiều, chị muốn giúp mọi người đi lên bằng con đường giáo dục giống như mình'. Từ 2020 tới nay, lớp học có hơn 50 học viên đạt aim 6.5-7.5. Minimal Englissh mong muốn trong tương lai 5 năm nữa sẽ giúp đỡ được 300 học viên đạt từ 6.5 trở lên và trở thành môi trường học tập thân thiện cùng với đội ngũ tận tình, mẫn cán."
                }
            ]
        },
        highlights: {
            label: "Điểm nổi bật",
            description: "Minimal ENglissh không chỉ là một lớp học tiếng Anh, mà còn là biểu tượng của sự kiên trì và tinh thần không bỏ cuộc, cũng là nơi chị Hằng Nga truyền đạt những giá trị về sự nhất quán, tối giản nhưng hiệu quả trong học tập.",
            lecturers: {
                title: "Giảng viên",
                content: [
                    "Đội ngũ giảng viên đạt trình độ IELTS từ 7.5 - 8 và có kinh nghiệm giảng dạy lâu năm.",
                    "Founder là tác giả sách, được lưu hành rộng rãi trên thị trường mhư IELTS KEY GRAMMAR.",
                    "Các giảng viên luôn tận tâm và nghiêm khắc, thường xuyên cập nhật những kiến thức mới nhất để đảm bảo chất lượng dạy và học...."
                ]
            },
            teaching_methods: {
                title: "Phương pháp giảng dạy",
                content: [
                    "Giảng dạy học viên theo tư lối tư duy tối giản Minimalism",
                    "Áp dụng phương pháp Hybrid Learning, kết hợp học trực tiếp và trực tuyến linh hoạt, không bị phụ thuộc vào vị điểm",
                    "Bài giảng các lớp giống nhau xuyên suốt trong tuần, tạo sự linh hoạt về thời gian cho học viên, dễ dàng học bù, học xen kẽ.",                   
                    "Sử dụng công nghệ tiên tiến như AI và Gamification để hỗ trợ việc học."
                ]
            }
        },
        lectures: {
            label:"GIẢNG VIÊN",
            description: "Các giảng viên tại Minimal English",
            detail_lectures: [
                {
                    year: "Cô Hằng Nga Luna",
                    username:"Founder kiêm giảng viên chính",
                    image: "/images/Lectures/lectures1.png",
                    content: [                                     
                    "8.0 IELTS Overall ( 8.5 Speaking & 7.5 Writing )",
                    "Tốt nghiệp Thạc sĩ Lý Luận và Phương Pháp Giảng Dạy Tiếng Anh (MTESOL), Đại học Victoria - Melbourne - Australia cấp năm 2018",
                    "Tác giả cuốn sách học ngữ pháp nền tảng qua Mindmap",
                    "Tác giả cuốn sách luyện thi IELTS Key Grammar, nhà xuất bản Đại Học Quốc Gia Hà Nội.",
                    "12 năm kinh nghiệm giảng dạy IELTS và tiếng Anh học thuật.",
                    "8 năm kinh nghiệm phát triển khung chương trình Ngữ pháp tiếng Anh cho học viên mọi cấp độ."                    
                    ]                    
                },
                {                    
                    year: "Cô Nguyễn Phương",
                    username:"Giảng viên",
                    image: "/images/Lectures/lectures2.png",
                    content: [                   
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
                    year: "Thầy Tuấn Anh",
                    username:"Giảng viên",
                    image: "/images/Lectures/lectures3.png",
                    content: [                    
                    "IELTS 8.0 Overall, (8.5 speaking, 7.5 writting)",
                    "Cử nhân Luật Quốc tế.",
                    "Kinh nhiệm giảng dạy: 7 năm",
                    "Kinh nghiệm làm việc 3.5 năm tại môi trường quốc tế.",
                    "Kỹ năng giảng dạy hiện đại - Tâm Việt Group.",
                    "Kỹ năng chấm bài Writing/ Speaking - Chuyên gia chấm thi Hội Đồng Anh, thầy Paul Varah "
                    ]
                },
                {
                    year: "Đỗ Đức",
                    username:"Nhân viên học thuật",
                    image: "/images/Lectures/lectures4.png",
                    content: [                    
                    "Tốt nghiệp THPT Thăng Long",
                    "Đạt danh hiệu học sinh giỏi trong 3 năm cấp 3, điểm trung bình môn tiếng anh luôn >9.0. Bài thi môn Tiếng Anh THPTQG đạt 9.6.)",
                    "Hiện tại là sinh viên năm 2 trường Đại Học Ngoại Thương, khoa CLC Tiếng Anh Thương Mại.",
                    "Từng làm trợ giảng tại Trung tâm AMES ENGLISH TIMES CITY"
                    ]
                },
                {
                    year: "Nguyễn Anh Tú",
                    username:"Giảng viên Junior",
                    image: "/images/Lectures/lectures5.png",
                    content: [                   
                    "Tốt nghiệp Cử nhân chuyên ngành Sư phạm, Vietnam University of Fine Arts ",
                    "3 năm kinh nghiệm trong lĩnh vực giáo dục",
                    "1 năm kinh nghiệm giảng dạy và ôn thi tiếng Anh các cấp"                    
                    ]
                },
                {
                    year: "Sơn Nguyễn",
                    username:"Trợ giảng & nhân viên học thuật",
                    image: "/images/Lectures/lectures6.png",
                    content: [                    
                    "Vinschool Times City Middle School & High School 2016 - 2023: GPA 8.8",
                    "Cử nhân ngành khoa học máy tính (Đại học Công nghệ Swinburne Việt Nam) 2023 - 2026",
                    "Thực tập sinh KITE (Kids Tech), đóng góp vào việc phát triển tài liệu học tập và hỗ trợ giảng viên trong việc chuẩn bị bài giảng cho trẻ em.",
                    "Thực tập sinh tại Đơn vị Hỗ trợ và Chăm sóc Kỹ thuật Khách hàng, Phòng Hỗ trợ Kỹ thuật, GreenCloud (365 Group LLC)."                    
                    ]
                }

            ]
       }
    },
    library:{
        writing: [
            {
                title: "Bài 6. Write Task 2: Các loại trong một nốt nhạc",
                image: "/images/library/74bbca6266c0e208f4d14b8c2e35a53a.png",
                view: "102 lượt xem",
                time: "2 năm trước"
            },
            {
                title: "Bài 5. Write Task1 + 2: Học ở bậc gì, cũng KHÔNG thoát các ...",
                image: "/images/library/529fbadf9a788da26f816e8f785fa0c1.png",
                view: "102 lượt xem",
                time: "2 năm trước"
            },
            {
                title: "Bài 6. Write Task 2: Các loại trong một nốt nhạc",
                image: "/images/library/74bbca6266c0e208f4d14b8c2e35a53a.png",
                view: "102 lượt xem",
                time: "2 năm trước"
            },
        ],
        speaking: {},
        reading: {},
        listening: {},
        vocabulary: {},
        pronunciation: {},
        paraphrases: {},
        selfstudy: {}
    },
    news_blog:{
        tips: {},
        ieltsNews: [
            {
                tag: "ielts News",
                image: "/images/new&blog/fea461f0d5ca3b61b95aa37b6c089f7b.png",
                publishInfor: "20/07/2024 - 10 phút đọc",
                title: "Cách nâng band điểm IELTS hiệu quả, dễ dàng",
                description: "Khi người dùng nhấp vào bài viết, hiển thị bài viết đầy đủ với 3-4 đoạn văn và 2-3 hình ảnh minh họa...",
                href: "/"
            },
            {
                tag: "ielts News",
                image: "/images/new&blog/fea461f0d5ca3b61b95aa37b6c089f7b.png",
                publishInfor: "20/07/2024 - 10 phút đọc",
                title: "Cách nâng band điểm IELTS hiệu quả, dễ dàng",
                description: "Khi người dùng nhấp vào bài viết, hiển thị bài viết đầy đủ với 3-4 đoạn văn và 2-3 hình ảnh minh họa...",
                href: "/"
            },
            {
                tag: "ielts News",
                image: "/images/new&blog/fea461f0d5ca3b61b95aa37b6c089f7b.png",
                publishInfor: "20/07/2024 - 10 phút đọc",
                title: "Cách nâng band điểm IELTS hiệu quả, dễ dàng",
                description: "Khi người dùng nhấp vào bài viết, hiển thị bài viết đầy đủ với 3-4 đoạn văn và 2-3 hình ảnh minh họa...",
                href: "/"
            },
            {
                tag: "ielts News",
                image: "/images/new&blog/fea461f0d5ca3b61b95aa37b6c089f7b.png",
                publishInfor: "20/07/2024 - 10 phút đọc",
                title: "Cách nâng band điểm IELTS hiệu quả, dễ dàng",
                description: "Khi người dùng nhấp vào bài viết, hiển thị bài viết đầy đủ với 3-4 đoạn văn và 2-3 hình ảnh minh họa...",
                href: "/"
            },
            {
                tag: "ielts News",
                image: "/images/new&blog/fea461f0d5ca3b61b95aa37b6c089f7b.png",
                publishInfor: "20/07/2024 - 10 phút đọc",
                title: "Cách nâng band điểm IELTS hiệu quả, dễ dàng",
                description: "Khi người dùng nhấp vào bài viết, hiển thị bài viết đầy đủ với 3-4 đoạn văn và 2-3 hình ảnh minh họa...",
                href: "/"
            },
            {
                tag: "ielts News",
                image: "/images/new&blog/fea461f0d5ca3b61b95aa37b6c089f7b.png",
                publishInfor: "20/07/2024 - 10 phút đọc",
                title: "Cách nâng band điểm IELTS hiệu quả, dễ dàng",
                description: "Khi người dùng nhấp vào bài viết, hiển thị bài viết đầy đủ với 3-4 đoạn văn và 2-3 hình ảnh minh họa...",
                href: "/"
            },
            {
                tag: "ielts News",
                image: "/images/new&blog/fea461f0d5ca3b61b95aa37b6c089f7b.png",
                publishInfor: "20/07/2024 - 10 phút đọc",
                title: "Cách nâng band điểm IELTS hiệu quả, dễ dàng",
                description: "Khi người dùng nhấp vào bài viết, hiển thị bài viết đầy đủ với 3-4 đoạn văn và 2-3 hình ảnh minh họa...",
                href: "/"
            },
        ],
        minimalNews:{},
        faq: {}
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
