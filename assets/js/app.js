!function (t) { t((function () { var e = window.location.href, c = void 0 !== document.title ? document.title : "", n = void 0 !== screen.width && screen.width > 1024 ? "no" : "yes", a = "", _ = {}; function o(t) { return !!_[t] && _[t] } function i(t, e) { _[t] = e; var c = JSON.stringify(_); localStorage.setItem("ht_ctc_storage", c) } localStorage.getItem("ht_ctc_storage") && (_ = localStorage.getItem("ht_ctc_storage"), _ = JSON.parse(_)); var r = ""; !function () { if ("undefined" != typeof ht_ctc_chat_var) r = ht_ctc_chat_var; else try { if (document.querySelector(".ht_ctc_chat_data")) { var e = t(".ht_ctc_chat_data").attr("data-settings"); r = JSON.parse(e), window.ht_ctc_chat_var = r } } catch (t) { r = {} } }(); var s, h = {}; function l(e = "open") { m(), t(".ctc_cta_stick").remove(), t(".ht_ctc_chat_greetings_box").show(70), t(".ht_ctc_chat_greetings_box").addClass("ctc_greetings_opened").removeClass("ctc_greetings_closed"), i("g_action", e), "user_opened" == e && i("g_user_action", e) } function u(e = "close") { t(".ht_ctc_chat_greetings_box").hide(70), t(".ht_ctc_chat_greetings_box").addClass("ctc_greetings_closed").removeClass("ctc_greetings_opened"), i("g_action", e), "user_closed" == e && i("g_user_action", e) } function d(t) { var e; "yes" == n ? "show" == r.dis_m && ((e = document.querySelector(".ht_ctc_desktop_chat")) && e.remove(), t.style.cssText = r.pos_m + r.css, p(t)) : "show" == r.dis_d && ((e = document.querySelector(".ht_ctc_mobile_chat")) && e.remove(), t.style.cssText = r.pos_d + r.css, p(t)) } function p(e) { try { t(e).show(parseInt(r.se)) } catch (t) { e.style.display = "block" } !function () { if (t(".ht_ctc_chat_greetings_box").length) { if (r.g_device) { if ("yes" !== n && "mobile" == r.g_device) return void t(".ht_ctc_chat_greetings_box").remove(); if ("yes" == n && "desktop" == r.g_device) return void t(".ht_ctc_chat_greetings_box").remove() } document.dispatchEvent(new CustomEvent("ht_ctc_event_after_chat_displayed", { detail: { ctc: r, greetings_open: l, greetings_close: u } })), r.g_init && "open" == r.g_init && "user_closed" !== o("g_user_action") && l("init"), t(document).on("click", '.ctc_greetings, #ctc_greetings, .ctc_greetings_now, [href="#ctc_greetings"]', (function (t) { t.preventDefault(), u("element"), l("element") })) } }(), function () { if (document.querySelector(".ht_ctc_notification") && "stop" !== o("n_badge")) { if (document.querySelector(".ctc_nb")) { var e = t(".ht_ctc_badge").closest(".ht_ctc_style"); t(".ht_ctc_badge").css({ top: t(e).find(".ctc_nb").attr("data-nb_top"), right: t(e).find(".ctc_nb").attr("data-nb_right") }) } var c = r.n_time ? 1e3 * r.n_time : "150"; setTimeout((() => { t(".ht_ctc_notification").show(400) }), c) } }(), function (e) { var c = t(e).hasClass("ht_ctc_entry_animation") ? 1200 : 120; setTimeout((function () { e.classList.add("ht_ctc_animation", r.ani) }), c), t(".ht-ctc-chat").hover((function () { t(".ht-ctc-chat .ht-ctc-cta-hover").show(120) }), (function () { t(".ht-ctc-chat .ht-ctc-cta-hover").hide(100) })) }(e) } function m() { document.querySelector(".ht_ctc_notification") && (i("n_badge", "stop"), t(".ht_ctc_notification").remove()) } function g(t) { if (r.analytics && "session" == r.analytics) { if (sessionStorage.getItem("ht_ctc_analytics")) return; sessionStorage.setItem("ht_ctc_analytics", "done") } function n(t, n) { try { t = (t = (t = t.replace("{number}", n)).replace("{title}", c)).replace("{url}", e) } catch (t) { } return t } document.dispatchEvent(new CustomEvent("ht_ctc_event_analytics")); var a = r.number; if (t.classList.contains("ht-ctc-sc") && (a = t.getAttribute("data-number")), r.ga || r.ga4) { var _ = r.g_an_event_name && "" !== r.g_an_event_name ? r.g_an_event_name : "click to chat"; _ = n(_, a); var o = {}, i = "Click to Chat for WhatsApp", s = "chat: " + a, l = c + ", " + e; if (h.g_an_params && h.g_an_params.forEach((t => { if (h[t]) { var e = h[t], c = e.key, _ = e.value; c = n(c, a), _ = n(_, a), o[c] = _ } })), "undefined" != typeof gtag) gtag("event", _, o); else if ("undefined" != typeof ga && void 0 !== ga.getAll) { ga.getAll()[0].send("event", i, s, l) } else "undefined" != typeof __gaTracker && __gaTracker("send", "event", i, s, l) } if ("undefined" != typeof dataLayer && dataLayer.push({ event: "Click to Chat", type: "chat", number: a, title: c, url: e, event_category: i, event_label: l, event_action: s }), r.ads && "undefined" != typeof gtag_report_conversion && gtag_report_conversion(), r.fb && "undefined" != typeof fbq) { var u = r.pixel_event_name && "" !== r.pixel_event_name ? r.pixel_event_name : "Click to Chat by HoliThemes", d = "trackCustom", p = {}; d = h.pixel_event_type && "" !== h.pixel_event_type ? h.pixel_event_type : d, h.pixel_params && h.pixel_params.forEach((t => { if (h[t]) { var e = h[t], c = e.key, _ = e.value; c = n(c, a), _ = n(_, a), p[c] = _ } })), fbq(d, u, p) } } function v(c) { document.dispatchEvent(new CustomEvent("ht_ctc_event_number", { detail: { ctc: r } })); var _ = r.number, o = r.pre_filled; c.hasAttribute("data-number") && (_ = c.getAttribute("data-number")), c.hasAttribute("data-pre_filled") && (o = c.getAttribute("data-pre_filled")); try { o = (o = o.replaceAll("%", "%25")).replace(/\[url]/gi, e), o = encodeURIComponent(decodeURI(o)) } catch (t) { } if ("" != _) { var i = "https://wa.me/" + _ + "?text=" + o, s = r.url_target_d ? r.url_target_d : "_blank"; "yes" == n ? (r.url_structure_m && (i = "whatsapp://send?phone=" + _ + "&text=" + o, s = "_self"), r.custom_url_m && "" !== r.custom_url_m && (i = r.custom_url_m)) : (r.url_structure_d && (i = "https://web.whatsapp.com/send?phone=" + _ + "&text=" + o), r.custom_url_d && "" !== r.custom_url_d && (i = r.custom_url_d)); var h = "popup" == s ? "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=788,height=514,left=100,top=100" : "noopener"; window.open(i, s, h), g(c), y(_), m() } else t(".ht-ctc-chat").html(a) } "undefined" != typeof ht_ctc_variables ? h = ht_ctc_variables : (h = { g_an_event_name: "click to chat", pixel_event_name: "Click to Chat by HoliThemes", pixel_event_type: "trackCustom", g_an_params: ["g_an_param_1", "g_an_param_2", "g_an_param_3"], g_an_param_1: { key: "number", value: "{number}" }, g_an_param_2: { key: "title", value: "{title}" }, g_an_param_3: { key: "url", value: "{url}" }, pixel_params: ["pixel_param_1", "pixel_param_2", "pixel_param_3", "pixel_param_4"], pixel_param_1: { key: "Category", value: "Click to Chat for WhatsApp" }, pixel_param_2: { key: "return_type", value: "chat" }, pixel_param_3: { key: "ID", value: "{number}" }, pixel_param_4: { key: "Title", value: "{title}" } }, window.ht_ctc_chat_var = h), function () { var e = document.querySelector(".ht_ctc_chat_data"); e && (a = t(".ht_ctc_chat_data").attr("data-no_number"), e.remove()) }(), document.dispatchEvent(new CustomEvent("ht_ctc_event_settings", { detail: { ctc: r } })), (s = document.querySelector(".ht-ctc-chat")) && (document.dispatchEvent(new CustomEvent("ht_ctc_event_chat")), function (t) { "yes" == r.schedule ? document.dispatchEvent(new CustomEvent("ht_ctc_event_display", { detail: { ctc: r, display_chat: d, ht_ctc_chat: t } })) : d(t) }(s), s.addEventListener("click", (function () { t(".ht_ctc_chat_greetings_box").length || v(s) })), t(".ht_ctc_chat_greetings_box").length && t(document).on("click", ".ht_ctc_chat_style", (function (e) { t(".ht_ctc_chat_greetings_box").hasClass("ctc_greetings_opened") ? u("user_closed") : l("user_opened") })), t(document).on("click", ".ctc_greetings_close_btn", (function (t) { u("user_closed") })), t(document).on("click", ".ht_ctc_chat_greetings_box_link", (function (e) { e.preventDefault(), document.querySelector("#ctc_opt") ? t("#ctc_opt").is(":checked") || o("g_optin") ? v(s) : t(".ctc_opt_in").show(400).fadeOut("1").fadeIn("1") : v(s), document.dispatchEvent(new CustomEvent("ht_ctc_event_greetings")) })), document.querySelector("#ctc_opt") && t("#ctc_opt").on("change", (function (e) { t("#ctc_opt").is(":checked") && (t(".ctc_opt_in").hide(100), i("g_optin", "y"), setTimeout((() => { v(s) }), 500)) }))), t(document).on("click", ".ht-ctc-sc-chat", (function () { var t = this.getAttribute("data-number"), c = this.getAttribute("data-pre_filled"); c = c.replace(/\[url]/gi, e), c = encodeURIComponent(c), r.url_structure_d && "yes" !== n ? window.open("https://web.whatsapp.com/send?phone=" + t + "&text=" + c, "_blank", "noopener") : window.open("https://wa.me/" + t + "?text=" + c, "_blank", "noopener"), g(this), y(t) })), t(document).on("click", ".ctc_chat, #ctc_chat", (function (e) { v(this), t(this).hasClass("ctc_woo_place") && e.preventDefault() })), t(document).on("click", '[href="#ctc_chat"]', (function (t) { t.preventDefault(), v(this) })); var f = r.hook_v ? r.hook_v : ""; function y(e) { if (r.hook_url) { var c = {}; if (r.hook_v) { c = void 0 !== f ? f : r.hook_v; var n = {}, a = 1; c.forEach((t => { n["value" + a] = t, a++ })), r.hook_v = n } document.dispatchEvent(new CustomEvent("ht_ctc_event_hook", { detail: { ctc: r, number: e } })); var _ = r.hook_url; if (c = r.hook_v, r.webhook_format && "json" == r.webhook_format) var o = c; else o = JSON.stringify(c); t.ajax({ url: _, type: "POST", mode: "no-cors", data: o, success: function (t) { } }) } } })) }(jQuery);
function removeInnerElements(elementId) {
    const elementToRemove = document.getElementById(elementId);
    if (elementToRemove) {
        while (elementToRemove.firstChild) {
            elementToRemove.removeChild(elementToRemove.firstChild);
        }
    } else {
        console.error(`Element with ID "${elementId}" not found.`);
    }
}
function createClientTestimonial(element, imgSrc, title, description) {
    // Create the main div element
    const div = document.createElement('div');
    // Create the image div and add the image
    const imageDiv = document.createElement('div');
    const image = document.createElement('img');
    image.src = imgSrc;
    image.classList = 'animate__animated animate__fadeInLeft'
    imageDiv.appendChild(image);
    // Create the section for the title and description
    const section = document.createElement('section');

    // Create the h4 element and add the title
    const h4 = document.createElement('h4');
    h4.textContent = title;
    h4.classList = 'animate__animated animate__fadeInDown'
    section.appendChild(h4);

    // Create the p element and add the description
    const p = document.createElement('p');
    p.textContent = description;
    p.classList = 'animate__animated animate__fadeIn'
    section.appendChild(p);

    // Append the image div and section to the main div
    div.appendChild(imageDiv);
    div.appendChild(section);

    // Append the created div to the specified element
    element.appendChild(div);
}
const ourServices_modal_middle_box_content_title = document.getElementById('ourServices_modal_middle_box_content_title')
const ourServices_modal_middle_box_content_description = document.getElementById('ourServices_modal_middle_box_content_description')
const feature_right_element_left_title_btn_data = [
    {
        num: 1,
        title: 'Discovery & Actionable Insights',
        description: 'Developing a future-proof business line; we help by answering your unknowns, challenging your view of what is possible and by identifying linkages of emerging technologies with existing & new markets',
    },
    {
        num: 2,
        title: 'Positioning & Strategy',
        description: 'Make Informed Selections. Develop Game Plans: We leverage deep rooted techno-commercial insights and work together in developing action plans to help you meet your strategic business objectives.',
    },
    {
        num: 3,
        title: 'Implementation & Driving Disruption',
        description: 'Deliver business impact. We help our clients navigate uncertainties and assist in implementing technologies and business models to solve existing business challenges, address strategic growth objectives or be the disruptors in their markets.',
    },
]

feature_right_element_left_title_btn_data.map((data) => {
    const feature_right_element_left_title_btn = document.querySelectorAll(`.feature_right_element_left_title_btn${data.num}`)
    // biome-ignore lint/complexity/noForEach: <explanation>
    feature_right_element_left_title_btn.forEach((e) => {
        e.addEventListener('click', () => {
            document.getElementById('ourServices_modal').style.display = 'flex'
            removeInnerElements('ourServices_modal_middle_box_content_points')
            ourServices_modal_middle_box_content_title.textContent = ''
            ourServices_modal_middle_box_content_title.textContent = data.title
            ourServices_modal_middle_box_content_description.textContent = ''
            ourServices_modal_middle_box_content_description.textContent = data.description
        })
    })
})











// const client_logo_images_part_strip_div = document.getElementById('client_logo_images_part_strip_div')
// const client_logo_images_part_c_left = document.getElementById('client_logo_images_part_c_left')
// const client_logo_images_part_c_right = document.getElementById('client_logo_images_part_c_right')

// let stateCountInterval = 0
// const maxStateCount = 4995
// setInterval(() => {
//     if (stateCountInterval >= maxStateCount) {
//         stateCountInterval = 0
//         client_logo_images_part_strip_div.style.transform = `translateX(${!stateCountInterval ? 135 : stateCountInterval + 135}%)`
//         return
//     }
//     client_logo_images_part_strip_div.style.transform = `translateX(${!stateCountInterval ? 135 : stateCountInterval + 135}%)`
//     stateCountInterval += 135
// }, 10000)
// client_logo_images_part_c_left.addEventListener('click', () => {
//     if (stateCountInterval >= maxStateCount) {
//         stateCountInterval = 0
//         return;
//     }
//     stateCountInterval += 135
//     client_logo_images_part_strip_div.style.transform = `translateX(${!stateCountInterval ? 135 : stateCountInterval + 135}%)`
// })
// client_logo_images_part_c_right.addEventListener('click', () => {
//     if (stateCountInterval <= -maxStateCount) {
//         stateCountInterval = 0
//         return;
//     }
//     stateCountInterval -= 135
//     client_logo_images_part_strip_div.style.transform = `translateX(${!stateCountInterval ? 135 : stateCountInterval + 135}%)`
// })







const about_client_image_obj = {
    0: {
        img: 'img/our_client_word_c_img1.jpg',
        title: 'Aaron Frankel, Partner, Kramer Levin Naftalis & Frankel LLP',
        description: ' We used Sagacious IP for several patentability searches and were very happy with the thorough results, the quick turn-around, and the reasonable pricing. We will definitely use Sagacious IP again.',
    },
    1: {
        img: 'https://sagaciousresearch.com/wp-content/uploads/Barry-1-1.jpg',
        title: 'Barry Franks, Partner, European Patent Attorney, Hynell Intellectual Property AB',
        description: "I have been using Sagacious Research for my IP searches for almost ten years. I have always found them to be reliable, conscientious and very responsive to my requests. Although my current firm is small, I always feel that I am getting the same high level of attention and service that I received previously when working at a larger firm and I have no hesitation in recommending Sagacious Research's services.",
    },
    2: {
        img: 'https://sagaciousresearch.com/wp-content/uploads/Lynette-Wylie-2.jpg',
        title: 'Lynette Wylie, Attorney, Apex Juris PLLC',
        description: "Anant and Nick of Sagacious have consistently provided prompt and professional patent support services to our boutique IP firm over the past few years. We have been particularly impressed with their responsive communication in order to fully comprehend the format and substantive scope of a project result in order to obviate potential miscommunication.",
    },
    3: {
        img: 'https://sagaciousresearch.com/wp-content/uploads/Anders-Hedman-1-2.jpg',
        title: 'Mr Anders Hedman, European Patent Attorney, Aros Patent AB',
        description: "Sagacious IP has been used by our firm as a steady, high-quality provider of various searches for many years. We are very satisfied with their services.",
    },
    4: {
        img: 'https://sagaciousresearch.com/wp-content/uploads/Claine-Snow-1-2.jpg',
        title: 'Claine Snow, Senior Counsel, Arcturus Therapeutics',
        description: "I was preparing a patent application for a friend as a side project, and I reached out to Sagacious IP to ask about preparing formal drawings. Since my friend was paying for the filing costs himself, we had a tight budget, but the sales representative was very helpful in discussing how we could control costs and we were able to meet our budget expectations. The work was high quality, and they were quick to get the drawings prepared and revise them as needed.",
    },
    5: {
        img: 'https://sagaciousresearch.com/wp-content/uploads/Chris-Vindurampulle-2.png',
        title: 'Chris Vindurampulle, Senior Associate, K&L Gates',
        description: "I was happy to engage the services of SAGACIOUS IP in a freedom to operate patent analysis. The team provided the results in a professional and timely manner. Will definitely SAGACIOUS IP in mind for future work.",
    },
    6: {
        img: 'https://sagaciousresearch.com/wp-content/uploads/Patrick-J.-Coyne-1.jpg',
        title: 'Patrick J. Coyne, Partner, Finnegan, Henderson, Farabow, Garrett & Dunner, LLP',
        description: "I have retained Sagacious on several projects and referred several of our clients to them. They are responsive and responsible. Sagacious has always come through for me and my clients with timely, effective, and on-point search results.",
    },
    7: {
        img: 'https://sagaciousresearch.com/wp-content/uploads/Glenn-1-2.jpg',
        title: 'Glenn E. Forbis, Principal, Harness, Dickey & Pierce, P.L.C',
        description: "It has been a very good experience to work with Sagacious IP on several patentability and invalidity searches. I am really impressed with the quality of their services. I look forward to opportunities to see their work in other areas. I highly recommend them!",
    },
}
let about_client_image_count = 0;

// const client_about_client_part_c_left = document.getElementById('client_about_client_part_c_left')
// const client_about_client_part_c_right = document.getElementById('client_about_client_part_c_right')
// const our_client_info_strip_move = document.getElementById('our_client_info_strip_move')
// client_about_client_part_c_left.addEventListener('click', () => {
//     if (!about_client_image_count) {
//         about_client_image_count = Object.keys(about_client_image_obj).length - 1;
//     } else {
//         about_client_image_count -= 1
//     }
//     removeInnerElements('our_client_info_strip_move')
//     createClientTestimonial(our_client_info_strip_move, about_client_image_obj[about_client_image_count]?.img, about_client_image_obj[about_client_image_count]?.title, about_client_image_obj[about_client_image_count].description)
// })
// client_about_client_part_c_right.addEventListener('click', () => {
//     if (about_client_image_count >= Object.keys(about_client_image_obj).length - 1) {
//         about_client_image_count = 0
//     } else {
//         about_client_image_count += 1
//     }
//     removeInnerElements('our_client_info_strip_move')
//     createClientTestimonial(our_client_info_strip_move, about_client_image_obj[about_client_image_count].img, about_client_image_obj[about_client_image_count].title, about_client_image_obj[about_client_image_count].description)
// })
// setInterval(() => {
//     if (about_client_image_count >= Object.keys(about_client_image_obj).length - 1) {
//         about_client_image_count = 0
//     } else {
//         about_client_image_count += 1
//     }
//     removeInnerElements('our_client_info_strip_move')
//     createClientTestimonial(our_client_info_strip_move, about_client_image_obj[about_client_image_count].img, about_client_image_obj[about_client_image_count].title, about_client_image_obj[about_client_image_count].description)
// }, 10000)




const our_team_section_team_cards_div = document.getElementById('our_team_section_team_cards_div')

const our_team_section_team_cards_div_length_child = our_team_section_team_cards_div.children.length;

for (let index = 1; index <= our_team_section_team_cards_div_length_child; index++) {
    const our_team_section_team_cards_div_length_child_ = document.getElementById(`our_team_section_team_cards_div_child_${index}`)
    our_team_section_team_cards_div_length_child_.addEventListener('mouseenter', () => {
        const our_team_section_team_cards_div_length_child_ul = document.querySelector(`#our_team_section_team_cards_div_child_${index} > section > ul`)
        our_team_section_team_cards_div_length_child_ul.style.transform = 'translateX(0%)'
    })
    our_team_section_team_cards_div_length_child_.addEventListener('mouseleave', () => {
        const our_team_section_team_cards_div_length_child_ul = document.querySelector(`#our_team_section_team_cards_div_child_${index} > section > ul`)
        our_team_section_team_cards_div_length_child_ul.style.transform = 'translateX(-110%)'
    })
}

const feature_right_element_left_title_btn__dot_data = [
    {
        num: 1,
        title: 'Foresight & Horizon Planning',
        description: 'Build a visionary outlook on horizon technologies and market scenarios and map the toolkit necessary to future-proof your business',
        points: [
            'Key trends',
            'Early signals',
            'Scenarios',
            'Roadmaps',
            'Tipping points',
        ],
    },
    {
        num: 2,
        title: 'Technology Scouting & Monitoring',
        description: 'Dissect the emerging and transforming technology space that offers new opportunities and threats for your sector and organization',
        points: [
            'Technology Intelligence',
            'Early signals',
            'Technology Landscapes',
            'Benchmarking Digital and platform',
            'technologies',
        ],
    },
    {
        num: 3,
        title: 'Opportunity Identification',
        description: 'Uncover your growth opportunities that leverage complementary assets effectively and enable innovative engagement options',
        points: [
            'Unexplored & under-served markets',
            'Market adjacency',
            'Unmet needs & whitespaces',
            'Use-case mapping and novel applications',
            'Business model innovation',
            'New ecosystems & partners',
        ],
    },
    {
        num: 4,
        title: 'Market Assessment',
        description: 'Determine the market dynamics and demand scenarios that will impact your time-to-market and potential return on investment',
        points: [
            'Market potential & outlook',
            'Short-mid-long-term scenarios',
            'Global & regional market landscape',
            'Buying trends',
            'Voice-of-customer',
            'Regulations',
        ],
    },
    {
        num: 5,
        title: 'Competitive Intelligence',
        description: 'Inform your strategy with industry benchmarks and competitive best-practices and avoid costly and predictable missteps',
        points: [
            'Competitor assessment & analysis',
            'Benchmarking',
            'Supplier scouting',
            'Roadmaps',
            'Pricing and Product placement',
        ],
    },
    {
        num: 6,
        title: 'Strategy Development',
        description: 'Chart your path to accessing the defined opportunity by selecting from amongst a series of options in the portfolio with a clear-eyed view of your drivers and barriers',
        points: [
            'Game-changing opportunities',
            'Business model options',
            'Route to market',
            'Market entry strategy',
            'Technology adoption',
        ],
    },
    {
        num: 7,
        title: 'Technology, Market & Business Model Evaluation',
        description: 'Appraise the full slate of technology options, potential markets segments, and possible business models critically to make informed selections',
        points: [
            'Technology screening & shortlisting',
            'Assess promising technology & applications',
            'Tech availability & value proposition',
        ],
    },
    {
        num: 8,
        title: 'Partner Identification & M&A',
        description: 'Identify the partners who can help you collapse the technology curve, accelerate time-to-market, and get access to right know-how and markets',
        points: [
            'Access to unique technology & markets',
            'Supplier & solution provider landscape',
            'Target prioritization & selection',
            'Techno-economic due diligence',
            'Technology commercialization',
        ],
    },
    {
        num: 9,
        title: 'Sustainability',
        description: 'Transform your operations and boost their viability by optimizing your processes and supply chain through novel strategies',
        points: [
            'Circular economy',
            'Regulations',
            'Materials availability & pricing',
            'Supplier ecosystem',
            'Supply chain innovation',
            'Cost efficiency & environmental footprint',
        ],
    },
    {
        num: 10,
        title: 'Continuous Disruption Monitoring',
        description: 'Stay abreast of new developments that could impact the viability of your current programs or strategy or hinder your projects’ success',
        points: [
            'Ongoing monitoring of select technologies & target markets',
            'Ecosystem monitoring',
            'New startups & business models',
            'Periodic Red Team reviews',
            'Disruptive opportunities',
        ],
    },
    {
        num: 11,
        title: 'Technology Adoption',
        description: 'Adopt external technologies to solve existing problems, align with your strategic focus, and disrupt the status quo.',
        points: [
            'In Depth Technology Mapping',
            'Value Proposition Assessment',
            'Technology & Market Validation',
            'IP Assessment',
            'Strategic fitment assessment',
            'Partner ecosystem',
            'Feasibility',
            'Prototyping support',
            'Risk profile & mitigation',
        ],
    },
    {
        num: 12,
        title: 'Technology Commercialization',
        description: 'Identify your technology potential & right fit target segments to commercialize your technology in non-competing areas and build new revenue streams',
        points: [
            'Unique, tailor-made technology transfer concepts',
            'In-depth technology mapping',
            'Value proposition assessment',
            'Market identification & validation',
            'Sales & marketing of technology',
            'Business model development',
        ],
    },
    {
        num: 13,
        title: 'Company / Technology Due Diligence',
        description: 'Benchmark technologies with others that have similar applications; deep evaluation of suitability, maturity, IP and value proposition of technologies. Strategic fitment evaluation of companies for potential collaborations',
        points: [
            'Tech health card',
            'Strategic fit analysis',
            'Strategic fit analysis',
            'Value proposition Analysis',
            'Risk analysis',
        ],
    },
    {
        num: 14,
        title: 'Technology Implementation Ecosystem',
        description: 'Benchmark technologies with others that have similar applications; deep evaluation of suitability, maturity, IP and value proposition of technologies. Strategic fitment evaluation of companies for potential collaborations',
        points: [
            'System Integrator',
            'Looks like-Works like Prototyping',
            'Channel partners',
            'Testing labs',
        ],
    },
]

const feature_right_element_right_featurs_btn_an_text = document.querySelectorAll('.feature_right_element_right_featurs_btn_an_text')
const feature_right_element_right_featurs_btn_an_text_phone = document.querySelectorAll('.feature_right_element_right_featurs_btn_an_text_phone')



// biome-ignore lint/complexity/noForEach: <explanation>
for (let index = 1; index <= feature_right_element_right_featurs_btn_an_text.length; index++) {
    const element = feature_right_element_right_featurs_btn_an_text[index - 1];
    element?.addEventListener('click', () => {
        const data = feature_right_element_left_title_btn__dot_data[index-1];
        document.getElementById('ourServices_modal').style.display = 'flex'
        removeInnerElements('ourServices_modal_middle_box_content_points')
        ourServices_modal_middle_box_content_title.textContent = ''
        ourServices_modal_middle_box_content_title.textContent = data.title
        ourServices_modal_middle_box_content_description.textContent = ''
        ourServices_modal_middle_box_content_description.textContent = data.description

        // biome-ignore lint/complexity/noForEach: <explanation>
        data.points.forEach((text) => {
                const sectionElement = document.createElement('section');
                const paragraphElement = document.createElement('p');
                const headingElement = document.createElement('h4');
                paragraphElement.textContent = '-';
                headingElement.textContent = text;
                sectionElement.appendChild(paragraphElement);
                sectionElement.appendChild(headingElement);
                document.getElementById('ourServices_modal_middle_box_content_points').appendChild(sectionElement);
            })
            
    })
}
for (let index = 1; index <= feature_right_element_right_featurs_btn_an_text_phone.length; index++) {
    const element = feature_right_element_right_featurs_btn_an_text_phone[index - 1];
    element?.addEventListener('click', () => {
        const data = feature_right_element_left_title_btn__dot_data[index-1];
        document.getElementById('ourServices_modal').style.display = 'flex';
        removeInnerElements('ourServices_modal_middle_box_content_points');
        ourServices_modal_middle_box_content_title.textContent = '';
        ourServices_modal_middle_box_content_title.textContent = data.title;
        ourServices_modal_middle_box_content_description.textContent = '';
        ourServices_modal_middle_box_content_description.textContent = data.description;

        // biome-ignore lint/complexity/noForEach: <explanation>
        data.points.forEach((text) => {
                const sectionElement = document.createElement('section');
                const paragraphElement = document.createElement('p');
                const headingElement = document.createElement('h4');
                paragraphElement.textContent = '-';
                headingElement.textContent = text;
                sectionElement.appendChild(paragraphElement);
                sectionElement.appendChild(headingElement);
                document.getElementById('ourServices_modal_middle_box_content_points').appendChild(sectionElement);
            })
            
    })
}
const our_section_phone_popup_close = document.querySelectorAll('.our_section_phone_popup_close')
our_section_phone_popup_close.forEach((e)=>{
    e.addEventListener('click',()=>{
        const our_section_phone_popup = document.querySelectorAll('.our_section_phone_popup')
        our_section_phone_popup.forEach((e)=>{
            e.style.display = 'none'
        })
    })
})
const our_section_phone_popup_count = document.querySelectorAll('.our_section_phone_popup_count')
for (let index = 1; index <= our_section_phone_popup_count.length; index++) {
    const our_section_phone_button = document.getElementById(`our_section_phone_button${index}`);
    our_section_phone_button.addEventListener('click', () =>{
        const our_section_phone_popup = document.getElementById(`our_section_phone_popup${index}`);
        our_section_phone_popup.style.display = 'flex';
    })
    
}
const enquriy_home_nav_btn = document.getElementById('enquriy_home_nav_btn');

enquriy_home_nav_btn.addEventListener('click', () => {
    const enquriy_home_nav_modal = document.getElementById('enquriy_home_nav_modal')
    enquriy_home_nav_modal.style.display = 'flex';
    console.log('click');
})

const enquiry_form_email = document.getElementById('enquiry_form_email')
const enquiry_form_submit_btn = document.getElementById('enquiry_form_submit_btn')



enquiry_form_email.addEventListener('change', () => {
    console.log(enquiry_form_email.value)
})





// Get references to the DIV and arrow buttons
const scrollableDiv = document.getElementById('our_section_part_inner_main');
const leftArrow = document.getElementById('our_section_scroll_btn_left');
const rightArrow = document.getElementById('our_section_scroll_btn_right');

// Set initial scroll position
let scrollPosition = 0;

// Calculate maximum scroll distance
const maxScroll = scrollableDiv.scrollWidth - scrollableDiv.clientWidth;
const scrollAmount = 800
// Function to handle left arrow click
function scrollLeft() {
  if (scrollPosition > 0) {
    scrollPosition -= scrollAmount; // Adjust scroll increment as needed
    scrollableDiv.scrollLeft = scrollPosition;
  }
}

// Function to handle right arrow click
function scrollRight() {
  if (scrollPosition < maxScroll) {
    scrollPosition += scrollAmount; // Adjust scroll increment as needed
    scrollableDiv.scrollLeft = scrollPosition;
  }
}

// Add event listeners to arrow buttons
leftArrow.addEventListener('click', scrollLeft);
rightArrow.addEventListener('click', scrollRight);
