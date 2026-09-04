const STORAGE_KEY = 'colora_jd_library_v1';
const SETTINGS_KEY = 'colora_jd_settings_v1';

const BRAND_DEFAULTS = {
  companyName: 'COLORA',
  tagline: 'COLORA - COLOR YOUR AURA',
  brandStory: 'COLORA là sự kết hợp giữa COLOR — màu sắc, hành động tô vẽ — và AURA — khí chất, năng lượng, bản sắc cá nhân. Mỗi người có một màu sắc và khí chất riêng; COLORA tồn tại để giúp họ thể hiện màu sắc ấy theo cách riêng của mình.',
  hiringPromise: 'Nhiều ownership hơn — trải nghiệm rộng hơn — tốc độ học nhanh hơn. Là một thương hiệu D2C đang phát triển, mỗi vai trò tại COLORA có phạm vi rộng và cơ hội tiếp xúc với nhiều phần của doanh nghiệp. Bạn không cần biết mọi thứ từ ngày đầu; chúng tôi coi trọng khả năng học hỏi, sự chủ động và tiềm năng phát triển.',
  location: 'Việt Nam',
  workMode: 'On-site / Hybrid tùy vị trí',
  employmentType: 'Full-time',
  applyEmail: 'careers@colora.vn',
  website: 'colora.vn',
  footerNote: 'JD nội bộ dành riêng cho COLORA. Nội dung có thể được điều chỉnh theo seniority, giai đoạn phát triển và nhu cầu thực tế của team.'
};

const seedRoles = [
  {
    id: crypto.randomUUID(),
    title: 'Digital Marketing Manager',
    department: 'Marketing / E-commerce',
    reportsTo: 'Founder / General Manager',
    level: 'Junior–Middle / Middle',
    location: '',
    employmentType: '',
    summary: 'Digital Marketing Manager chịu trách nhiệm thúc đẩy traffic, customer acquisition, conversion và revenue từ các kênh digital của COLORA. Vì COLORA là một thương hiệu D2C đang trong giai đoạn xây dựng, vai trò này không chỉ “chạy ads” mà được tham gia toàn bộ digital customer journey: Awareness → Content → Traffic → Website → Conversion → CRM → Retention.',
    responsibilities: [
      { title: 'Digital Marketing & Growth', weight: '35%', bullets: ['Lập kế hoạch digital marketing theo tháng/quý và campaign calendar.', 'Quản lý Meta Ads; phối hợp mở rộng Google Ads / TikTok Ads khi phù hợp.', 'Theo dõi spend, traffic, CAC, CPA, ROAS, MER và conversion.', 'Phối hợp Designer và Editor xây creative testing; tối ưu campaign hàng tuần.'] },
      { title: 'E-commerce', weight: '20%', bullets: ['Theo dõi hiệu suất homepage, landing page, product page, collection page và product launch.', 'Theo dõi Sessions, Conversion Rate, Add-to-Cart, Checkout Rate, AOV, Revenue và SKU performance.', 'Đề xuất cải thiện merchandising, CRO, cross-sell và upsell; không yêu cầu phải là developer.'] },
      { title: 'Content & Social', weight: '15%', bullets: ['Phối hợp xây nội dung cho Facebook, Instagram, TikTok, Threads, email và website.', 'Viết creative brief, xác định content angle, CTA và đánh giá hiệu quả creative.', 'Đưa insight từ performance trở lại cho creative team.'] },
      { title: 'CRM & Retention', weight: '15%', bullets: ['Tham gia xây customer lifecycle từ visitor đến repeat / loyal customer.', 'Phối hợp triển khai welcome, abandoned cart, post-purchase, review, cross-sell, birthday, VIP và win-back flow.', 'Theo dõi CRM revenue, repeat purchase và engagement.'] },
      { title: 'Influencer / KOC / Affiliate', weight: '10%', bullets: ['Tìm và quản lý creator database, outreach, seeding và tracking delivery.', 'Theo dõi code/link, assisted revenue và hiệu quả creator campaign.'] },
      { title: 'Reporting & Insights', weight: '5%', bullets: ['Lập dashboard định kỳ về revenue, spend, CAC, MER, ROAS, CVR, AOV và channel performance.', 'Không chỉ báo cáo số: phải trả lời điều gì đang xảy ra, vì sao và hành động tiếp theo là gì.'] }
    ],
    mustHave: ['Có nền tảng Digital Marketing và hiểu Meta Ads.', 'Có khả năng đọc dữ liệu, sử dụng Excel / Google Sheets tốt.', 'Có tư duy commercial, project management và tinh thần ownership.', 'Chủ động tự học, thích môi trường startup thay đổi nhanh.'],
    niceToHave: ['Từng làm e-commerce, fashion, beauty, jewelry, lifestyle hoặc premium/luxury.', 'Biết GA4, GTM, SEO, CRM, Haravan / Shopify, Google Ads hoặc TikTok Ads là lợi thế.'],
    kpis: [
      { title: 'Commercial', bullets: ['Revenue', 'CAC / MER / ROAS', 'Conversion Rate', 'AOV'] },
      { title: 'Growth & CRM', bullets: ['Qualified traffic & new customers', 'CRM revenue / returning customer rate', 'Creative testing output'] },
      { title: 'Execution', bullets: ['Campaign delivered on time', 'Reporting accuracy', 'Marketing calendar execution'] }
    ],
    development: 'Có cơ hội tiếp xúc trực tiếp với Brand Strategy → Performance → E-commerce → CRM → Customer Journey → Product → Analytics. Lộ trình có thể phát triển thành Growth Manager, Head of Growth, Head of E-commerce hoặc Marketing Manager.',
    whatYouGet: 'Được tham gia xây một thương hiệu D2C từ giai đoạn đầu, có quyền sở hữu đầu việc rõ ràng và được training trên các mảng liền kề. Strong performers có cơ hội xây process, lead function và mentor team khi công ty mở rộng.',
    updatedAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: 'Graphic Designer',
    department: 'Brand / Creative',
    reportsTo: 'Founder / Brand Lead',
    level: 'Junior / Middle',
    location: '', employmentType: '',
    summary: 'Graphic Designer chịu trách nhiệm chuyển Brand Identity của COLORA thành một hệ thống hình ảnh nhất quán trên toàn bộ customer journey — từ social, ads và website đến packaging, CRM, campaign và physical touchpoints. Đây không phải là vị trí chỉ “thiết kế post Facebook”; designer sẽ có ownership thực tế trên cách thương hiệu xuất hiện và phát triển.',
    responsibilities: [
      { title: 'Brand Design', weight: '30%', bullets: ['Phát triển và duy trì typography, color, composition, grid, graphic elements và brand consistency.', 'Xây brand assets, templates và visual systems phục vụ vận hành hàng ngày.'] },
      { title: 'Social Media Design', weight: '20%', bullets: ['Thiết kế social posts, carousels, stories, TikTok covers và campaign assets.', 'Điều chỉnh visual theo channel, message, target customer và campaign objective.'] },
      { title: 'Performance Creative', weight: '15%', bullets: ['Phối hợp Marketing tạo Meta / TikTok ads và retargeting creatives.', 'Tạo nhiều variation về hook, headline, layout, imagery và CTA để testing.'] },
      { title: 'E-commerce Design', weight: '15%', bullets: ['Thiết kế homepage banner, collection banner, landing modules, product storytelling và launch assets.', 'Có tư duy UI/layout cơ bản và hiểu hierarchy trên website là lợi thế.'] },
      { title: 'Packaging & Print', weight: '10%', bullets: ['Thiết kế / triển khai jewelry box, shopping bag, warranty card, thank-you card, product card, POSM và event materials.', 'Chuẩn bị file production chính xác cho nhà in / nhà cung cấp.'] },
      { title: 'Creative Development', weight: '10%', bullets: ['Tham gia campaign concept, moodboard, shoot planning, styling references và art direction.', 'Phối hợp photographer / editor đảm bảo output đúng brand.'] }
    ],
    mustHave: ['Thành thạo Adobe Illustrator và Photoshop.', 'Typography, layout và visual sensitivity tốt.', 'Có portfolio thể hiện tư duy thiết kế, không chỉ kỹ năng phần mềm.', 'Nhận feedback tốt, iterate nhanh và quản lý nhiều deliverables.'],
    niceToHave: ['Figma, Lightroom, After Effects hoặc basic motion.', 'Kinh nghiệm packaging / print production / fashion / luxury / photography.'],
    kpis: [
      { title: 'Quality', bullets: ['Brand consistency', 'Quality of execution', 'Production accuracy'] },
      { title: 'Delivery', bullets: ['On-time delivery', 'Ability to iterate', 'Design system development'] },
      { title: 'Commercial support', bullets: ['Creative testing output', 'Creative performance contribution'] }
    ],
    development: 'Có thể phát triển theo hướng Graphic Designer → Senior Designer → Art Director → Brand Designer / Creative Lead → Creative Director. Nhân sự được tiếp xúc digital, e-commerce, packaging và campaign thay vì bị giới hạn trong một loại asset.',
    whatYouGet: 'Được tham gia xây hệ thống thương hiệu từ sớm, có nhiều không gian thử nghiệm và phát triển portfolio thực tế. COLORA ưu tiên coaching, feedback chất lượng và tăng scope theo năng lực.',
    updatedAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: 'Video Editor & Content Creator',
    department: 'Brand / Content',
    reportsTo: 'Brand / Marketing Lead',
    level: 'Junior / Middle',
    location: '', employmentType: '',
    summary: 'Video Editor & Content Creator biến sản phẩm, câu chuyện thương hiệu và campaign thành nội dung video social-first. Vai trò này không chỉ nhận footage rồi cắt; nhân sự được tham gia trọn vòng Idea → Script → Shoot → Edit → Publish → Analyze performance.',
    responsibilities: [
      { title: 'Video Editing', weight: '40%', bullets: ['Edit TikTok, Reels, paid ads, product video, campaign video, BTS, founder và educational content.', 'Thực hiện cutting, pacing, color correction, sound design, subtitle, basic motion và export chuẩn từng nền tảng.'] },
      { title: 'Content Production', weight: '25%', bullets: ['Tự quay content đơn giản bằng smartphone / camera cơ bản và lighting setup gọn.', 'Thực hiện jewelry close-up, hand shots, product detail, packaging, unboxing và BTS.'] },
      { title: 'Content Ideation', weight: '20%', bullets: ['Brainstorm hook, video concept, story, TikTok / Reels format, education và product storytelling.', 'Theo dõi trend nhưng giữ brand consistency; không copy trend máy móc.'] },
      { title: 'Content Optimization', weight: '10%', bullets: ['Theo dõi Watch Time, Completion Rate, Hook Rate, Engagement, CTR, Saves và Shares.', 'Phân tích drop-off và rút insight để cải thiện batch content tiếp theo.'] },
      { title: 'Asset Management', weight: '5%', bullets: ['Quản lý footage, project files, raw / final assets và campaign folders theo naming convention.'] }
    ],
    mustHave: ['Biết Premiere Pro, DaVinci Resolve hoặc Final Cut Pro.', 'Có tư duy storytelling, pacing, short-form editing, subtitle và sound.', 'Có portfolio / reel thể hiện khả năng thực tế.'],
    niceToHave: ['After Effects, photography, camera operation, lighting, motion graphics hoặc CapCut.', 'Đã làm beauty / fashion / jewelry / lifestyle content là lợi thế.'],
    kpis: [
      { title: 'Output & Quality', bullets: ['Video output', 'Delivery time', 'Content quality / consistency'] },
      { title: 'Performance', bullets: ['Watch time', 'Completion rate', 'Engagement', 'Creative winners'] },
      { title: 'Operations', bullets: ['Asset organization', 'Reuse rate of footage / asset library quality'] }
    ],
    development: 'Có thể phát triển thành Senior Editor → Content Producer → Creative Producer → Creative Lead; hoặc theo nhánh Content Creator → Social Content Strategist.',
    whatYouGet: 'Được thử sức ở cả concept, production, edit và performance learning. Scope sẽ rộng hơn agency / corporation truyền thống nhưng được guidance và tăng ownership theo năng lực.',
    updatedAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: 'Customer Experience Executive',
    department: 'Customer Experience / E-commerce',
    reportsTo: 'Founder / E-commerce & Operations Lead',
    level: 'Junior / Junior–Middle',
    location: '', employmentType: '',
    summary: 'Customer Experience Executive là người đại diện trực tiếp cho COLORA trong toàn bộ hành trình sau khi khách bắt đầu tương tác với thương hiệu. Trong một team D2C nhỏ, vai trò này không dừng ở “trả lời inbox”: nhân sự sẽ kết hợp Customer Service + Online Sales + Order Support + After-sales + CRM + Voice of Customer để giúp khách hiểu sản phẩm, chọn đúng, mua tự tin, được chăm sóc tốt và muốn quay lại. Phạm vi công việc rộng hơn doanh nghiệp lớn, nhưng đổi lại nhân sự được training sâu về sản phẩm, trang sức, customer journey và có nhiều room để thử sức, phát triển ownership.',
    responsibilities: [
      { title: 'Customer Service & Omnichannel Support', weight: '25%', bullets: ['Tiếp nhận và phản hồi khách hàng qua website, Facebook, Instagram, TikTok, email, Zalo/hotline hoặc các kênh được COLORA triển khai.', 'Giải đáp rõ ràng về sản phẩm, chất liệu, đá màu, size nhẫn, cách bảo quản, giao hàng, thanh toán, đổi trả và bảo hành.', 'Duy trì tone of voice lịch sự, tinh tế, gần gũi và nhất quán với trải nghiệm premium của COLORA.', 'Chủ động theo dõi các case chưa hoàn tất thay vì chờ khách liên hệ lại.'] },
      { title: 'Online Sales / Jewelry Advisor', weight: '20%', bullets: ['Tìm hiểu nhu cầu, dịp sử dụng, ngân sách, màu sắc và phong cách để tư vấn sản phẩm phù hợp.', 'Hỗ trợ chọn ring size, gemstone color, gifting, phối trang sức và collection phù hợp.', 'Thực hiện consultative selling, cross-sell / upsell có chọn lọc nhưng không hard-sell hoặc tạo áp lực mua.', 'Theo dõi khách có purchase intent cao và hỗ trợ hoàn tất đơn hàng khi cần.'] },
      { title: 'Order & Delivery Coordination', weight: '15%', bullets: ['Theo dõi hành trình Order → Payment → Fulfillment → Shipping → Delivery và cập nhật khách khi có phát sinh.', 'Hỗ trợ thay đổi thông tin đơn, địa chỉ, size, sản phẩm, hủy đơn hoặc xử lý failed delivery theo chính sách.', 'Phối hợp chặt với E-commerce & Operations để giảm order error và đảm bảo trải nghiệm liền mạch.'] },
      { title: 'Warranty, Returns & After-sales', weight: '15%', bullets: ['Tiếp nhận và quản lý exchange, return, warranty, repair, resize và product issue.', 'Ghi nhận đầy đủ tình trạng sản phẩm, hình ảnh, timeline và phương án xử lý trước khi bàn giao nội bộ / nhà cung cấp.', 'Theo dõi case từ lúc mở tới khi đóng; cập nhật khách chủ động và rõ ràng trong toàn bộ quá trình.', 'Biến service recovery thành cơ hội khôi phục niềm tin và giữ quan hệ lâu dài với khách hàng.'] },
      { title: 'CRM & Customer Relationship', weight: '10%', bullets: ['Cập nhật đúng customer profile, purchase history, preferences, size, màu yêu thích, notes và special requests trên CRM.', 'Hỗ trợ các flow post-purchase, review request, birthday, VIP, reactivation và các hoạt động retention khi được triển khai.', 'Nhận diện khách hàng trung thành / high-potential và đề xuất follow-up phù hợp.'] },
      { title: 'Voice of Customer & Cross-functional Support', weight: '10%', bullets: ['Tổng hợp định kỳ câu hỏi phổ biến, objection, complaint, lý do chưa mua, yêu cầu sản phẩm và insight từ hội thoại thật.', 'Chuyển insight về Product, Marketing, Website và Operations để cải thiện nội dung, PDP, chính sách và customer journey.', 'Hỗ trợ kiểm tra customer-facing touchpoints hoặc campaign/service script khi cần trong team nhỏ.'] },
      { title: 'Knowledge Base & Process Improvement', weight: '5%', bullets: ['Góp phần xây FAQ, response template, product knowledge base, care guide và SOP CX.', 'Đề xuất cải tiến quy trình dựa trên lỗi lặp lại, phản hồi của khách và dữ liệu service thực tế.'] }
    ],
    mustHave: ['Giao tiếp và viết tiếng Việt tốt; diễn đạt rõ ràng, lịch sự và có cảm nhận về tone of voice thương hiệu.', 'Kiên nhẫn, tinh tế, có empathy nhưng vẫn giữ được tư duy giải quyết vấn đề và nguyên tắc vận hành.', 'Detail-oriented; có khả năng theo dõi nhiều case song song mà không bỏ sót follow-up.', 'Học sản phẩm nhanh và sẵn sàng học kiến thức về jewelry, gemstone, sizing, care và after-sales.', 'Thoải mái với môi trường startup: chủ động, linh hoạt, biết ưu tiên và phối hợp cross-functional.', 'Có khả năng sử dụng Google Workspace / Excel hoặc công cụ CRM, inbox và order management ở mức cơ bản.'],
    niceToHave: ['Đã có kinh nghiệm customer service, online sales hoặc retail trong jewelry, fashion, beauty, lifestyle, hospitality hay premium service.', 'Có kinh nghiệm xử lý đơn hàng e-commerce, CRM, social inbox hoặc after-sales.', 'Tiếng Anh giao tiếp / viết tốt là lợi thế.', 'Có tư duy commercial và hứng thú với styling, gifting hoặc tư vấn sản phẩm.'],
    kpis: [
      { title: 'Service Quality', bullets: ['First Response Time & SLA adherence', 'Average Resolution Time', 'CSAT / customer feedback quality', 'Follow-up completion rate'] },
      { title: 'Commercial Contribution', bullets: ['Chat / consultation → Order Conversion', 'Assisted Revenue', 'AOV / cross-sell contribution when relevant'] },
      { title: 'After-sales & Accuracy', bullets: ['Case accuracy', 'Order / service error rate', 'Complaint resolution quality', 'Warranty / return case turnaround'] },
      { title: 'Customer Intelligence', bullets: ['Quality and consistency of Voice of Customer reporting', 'Useful insights translated into process / content improvements'] }
    ],
    development: 'Được training về COLORA product knowledge, jewelry consulting, customer communication, CRM, e-commerce operations và customer journey. Tùy thế mạnh, lộ trình có thể phát triển thành Senior Customer Experience Executive → Customer Experience Lead, CRM / Retention Executive, Online Sales Lead hoặc E-commerce Operations. Khi team mở rộng, strong performers có thể tham gia xây SOP, onboarding và training thành viên mới.',
    whatYouGet: 'Bạn không bị giới hạn trong một script CSKH hẹp. Bạn được tiếp xúc trực tiếp với khách hàng, sản phẩm, website, CRM, vận hành đơn hàng và after-sales; được guidance trong những mảng chưa có kinh nghiệm và có quyền đề xuất cách COLORA nên phục vụ khách tốt hơn. Đây là vị trí có learning curve nhanh, nhiều room to experience and develop và ownership sẽ tăng theo năng lực.',
    updatedAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: 'E-commerce & Operations Executive',
    department: 'E-commerce / Operations',
    reportsTo: 'Founder / General Manager',
    level: 'Junior / Middle',
    location: '', employmentType: '',
    summary: 'E-commerce & Operations Executive là đầu mối vận hành giúp sản phẩm đi đúng từ SKU → website → order → inventory → fulfillment → after-sales. Vai trò này phù hợp với một team D2C nhỏ vì kết nối front-end thương mại điện tử với back-end vận hành thay vì tách thành nhiều phòng ban.',
    responsibilities: [
      { title: 'E-commerce Operations', weight: '25%', bullets: ['Cập nhật product information, SKU, variant, pricing, imagery, collection và promotion trên website.', 'Kiểm tra tính chính xác của PDP, collection page và product launch trước khi publish.'] },
      { title: 'Order & Fulfillment', weight: '25%', bullets: ['Theo dõi order từ payment đến handover cho đơn vị vận chuyển.', 'Phối hợp pick-pack-ship, packaging, failed delivery, cancellation và exception cases.'] },
      { title: 'Inventory & SKU Control', weight: '20%', bullets: ['Theo dõi stock theo SKU / size / variant; hỗ trợ stock count và inventory accuracy.', 'Cảnh báo low stock, stockout risk và mismatch giữa hệ thống và tồn thực tế.'] },
      { title: 'Product Launch Coordination', weight: '15%', bullets: ['Phối hợp Product, Marketing, Creative và CX để launch đúng deadline.', 'Theo dõi checklist: product data, price, image, stock, packaging, content và website readiness.'] },
      { title: 'Process & Reporting', weight: '15%', bullets: ['Xây SOP đơn giản, checklist và issue log cho các quy trình lặp lại.', 'Báo cáo order issue, inventory issue, fulfillment SLA và nguyên nhân lỗi để cải tiến.'] }
    ],
    mustHave: ['Rất cẩn thận với dữ liệu và chi tiết.', 'Excel / Google Sheets tốt; tư duy quy trình và khả năng follow-through.', 'Có thể xử lý nhiều đầu việc song song và phối hợp cross-functional.'],
    niceToHave: ['Đã dùng Haravan, Shopify, Nhanh.vn, ERP / OMS / CRM hoặc hệ thống quản lý kho.', 'Kinh nghiệm retail / e-commerce / fulfillment / inventory là lợi thế.'],
    kpis: [
      { title: 'Accuracy', bullets: ['Product data accuracy', 'Inventory accuracy', 'Order error rate'] },
      { title: 'Fulfillment', bullets: ['On-time fulfillment', 'Exception resolution time', 'Failed delivery rate'] },
      { title: 'Launch & Process', bullets: ['Launch checklist completion', 'SOP adoption', 'Operational issue reduction'] }
    ],
    development: 'Có thể phát triển thành E-commerce Operations Manager, Supply Chain / Operations Lead hoặc E-commerce Manager tùy năng lực và định hướng.',
    whatYouGet: 'Được nhìn thấy toàn bộ cách một D2C brand vận hành thực tế, từ product master data đến đơn hàng cuối cùng. Đây là vị trí có learning curve nhanh và ownership lớn trong team nhỏ.',
    updatedAt: new Date().toISOString()
  }
];

let roles = loadJSON(STORAGE_KEY, seedRoles);
let settings = loadJSON(SETTINGS_KEY, BRAND_DEFAULTS);
applyMigrations();
let activeId = roles[0]?.id || null;
let editMode = 'edit';
let saveTimer = null;

const els = {
  roleList: document.getElementById('roleList'), roleSearch: document.getElementById('roleSearch'),
  editorPanel: document.getElementById('editorPanel'), printSheet: document.getElementById('printSheet'),
  saveStatus: document.getElementById('saveStatus'), settingsModal: document.getElementById('settingsModal'),
  settingsForm: document.getElementById('settingsForm')
};

function loadJSON(key, fallback) {
  try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : structuredClone(fallback); }
  catch { return structuredClone(fallback); }
}

function applyMigrations() {
  // Keep existing user data while bringing important COLORA defaults forward.
  if (!settings || typeof settings !== 'object') settings = structuredClone(BRAND_DEFAULTS);
  if (!settings.tagline || /LIBERT/i.test(settings.tagline)) {
    settings.tagline = 'COLORA - COLOR YOUR AURA';
  }
  if (!Array.isArray(roles)) roles = structuredClone(seedRoles);
  const cxTemplate = seedRoles.find(r => r.title === 'Customer Experience Executive');
  const cxIndex = roles.findIndex(r => (r.title || '').trim().toLowerCase() === 'customer experience executive');
  if (cxIndex === -1 && cxTemplate) {
    roles.push(structuredClone(cxTemplate));
  } else if (cxIndex >= 0 && cxTemplate) {
    const existing = roles[cxIndex];
    const looksLikePreviousDefault = existing.reportsTo === 'Operations / E-commerce Manager hoặc Founder' &&
      Array.isArray(existing.responsibilities) && existing.responsibilities.length === 6 &&
      Array.isArray(existing.kpis) && existing.kpis.length === 3;
    if (looksLikePreviousDefault) {
      roles[cxIndex] = {
        ...structuredClone(cxTemplate),
        id: existing.id,
        location: existing.location || '',
        employmentType: existing.employmentType || ''
      };
    }
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(roles));
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {}
}
function persist() {
  els.saveStatus.innerHTML = '<span class="save-dot"></span>Đang lưu…';
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(roles));
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    els.saveStatus.innerHTML = '<span class="save-dot"></span>Đã lưu';
  }, 180);
}
function activeRole() { return roles.find(r => r.id === activeId); }
function esc(s='') { return String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function splitLines(v='') { return String(v).split('\n').map(x => x.trim()).filter(Boolean); }
function lines(v=[]) { return (v || []).join('\n'); }
function fmtDate(iso) { try { return new Date(iso).toLocaleDateString('vi-VN'); } catch { return ''; } }

function renderRoleList(filter='') {
  const q = filter.trim().toLowerCase();
  const roleCount = document.getElementById('roleCount');
  if (roleCount) roleCount.textContent = `${roles.length} JD`; 
  const filtered = roles.filter(r => `${r.title} ${r.department}`.toLowerCase().includes(q));
  els.roleList.innerHTML = filtered.map(r => `
    <button class="role-item ${r.id===activeId?'active':''}" data-role-id="${r.id}">
      <div class="role-item-title">${esc(r.title)}</div>
      <div class="role-item-meta">${esc(r.department || 'Chưa phân nhóm')}</div>
    </button>`).join('') || '<div style="padding:16px;color:rgba(255,255,255,.5);font-size:12px">Không tìm thấy vị trí.</div>';
  els.roleList.querySelectorAll('[data-role-id]').forEach(btn => btn.addEventListener('click', () => { activeId = btn.dataset.roleId; renderAll(); }));
}

function inputField(label, key, value, type='text', help='') {
  return `<div class="field"><label>${esc(label)}</label>${type==='textarea'
    ? `<textarea data-field="${key}">${esc(value||'')}</textarea>`
    : `<input type="${type}" data-field="${key}" value="${esc(value||'')}" />`}${help?`<div class="help">${esc(help)}</div>`:''}</div>`;
}

function renderEditor() {
  const r = activeRole(); if (!r) return;
  els.editorPanel.innerHTML = `
    <div class="form-card">
      <h3>Thông tin vị trí</h3>
      <div class="form-grid">
        ${inputField('Tên vị trí','title',r.title)}
        ${inputField('Phòng ban','department',r.department)}
        ${inputField('Reports to','reportsTo',r.reportsTo)}
        ${inputField('Level / Seniority','level',r.level)}
        ${inputField('Địa điểm','location',r.location, 'text', 'Để trống để dùng Brand settings.')}
        ${inputField('Loại hình','employmentType',r.employmentType, 'text', 'Để trống để dùng Brand settings.')}
      </div>
    </div>
    <div class="form-card">
      <h3>Role Overview</h3>
      ${inputField('Tóm tắt vai trò','summary',r.summary,'textarea')}
    </div>
    <div class="form-card">
      <h3>Key Responsibilities</h3>
      <div id="responsibilityGroups">${r.responsibilities.map((g,i)=>groupEditor('resp',g,i)).join('')}</div>
      <button class="add-row-btn" data-add-group="resp">+ Thêm nhóm trách nhiệm</button>
    </div>
    <div class="form-card">
      <h3>Candidate Requirements</h3>
      ${inputField('Must Have — mỗi dòng 1 ý','mustHave',lines(r.mustHave),'textarea')}
      ${inputField('Nice to Have — mỗi dòng 1 ý','niceToHave',lines(r.niceToHave),'textarea')}
    </div>
    <div class="form-card">
      <h3>KPI / Success Measures</h3>
      <div id="kpiGroups">${r.kpis.map((g,i)=>groupEditor('kpi',g,i)).join('')}</div>
      <button class="add-row-btn" data-add-group="kpi">+ Thêm nhóm KPI</button>
    </div>
    <div class="form-card">
      <h3>Growth & Employee Value Proposition</h3>
      ${inputField('Learning & Career Development','development',r.development,'textarea')}
      ${inputField('What You Will Get','whatYouGet',r.whatYouGet,'textarea')}
    </div>`;

  els.editorPanel.querySelectorAll('[data-field]').forEach(el => el.addEventListener('input', onMainFieldInput));
  els.editorPanel.querySelectorAll('[data-group-field]').forEach(el => el.addEventListener('input', onGroupInput));
  els.editorPanel.querySelectorAll('[data-remove-group]').forEach(btn => btn.addEventListener('click', removeGroup));
  els.editorPanel.querySelectorAll('[data-add-group]').forEach(btn => btn.addEventListener('click', addGroup));
}

function groupEditor(kind, g, i) {
  return `<div class="group-card" data-group-kind="${kind}" data-index="${i}">
    <div class="group-head">
      <input data-group-field="title" value="${esc(g.title||'')}" placeholder="Tên nhóm" />
      ${kind==='resp'?`<input class="weight-input" data-group-field="weight" value="${esc(g.weight||'')}" placeholder="%" />`:''}
      <button class="mini-btn" type="button" data-remove-group="${kind}" data-index="${i}">Xóa</button>
    </div>
    <textarea data-group-field="bullets" style="width:100%;min-height:100px;border:1px solid #DAD7D0;background:#FCFBF8;border-radius:9px;padding:10px;resize:vertical" placeholder="Mỗi dòng 1 bullet">${esc(lines(g.bullets))}</textarea>
  </div>`;
}

function onMainFieldInput(e) {
  const r = activeRole(); if (!r) return;
  const key = e.target.dataset.field;
  if (['mustHave','niceToHave'].includes(key)) r[key] = splitLines(e.target.value);
  else r[key] = e.target.value;
  r.updatedAt = new Date().toISOString();
  persist(); renderRoleList(els.roleSearch.value); renderPreview();
}
function onGroupInput(e) {
  const card = e.target.closest('[data-group-kind]'); const r = activeRole(); if (!r || !card) return;
  const kind = card.dataset.groupKind; const idx = Number(card.dataset.index); const key = e.target.dataset.groupField;
  const target = kind === 'resp' ? r.responsibilities[idx] : r.kpis[idx];
  target[key] = key === 'bullets' ? splitLines(e.target.value) : e.target.value;
  r.updatedAt = new Date().toISOString(); persist(); renderPreview();
}
function addGroup(e) {
  const r = activeRole(); const kind = e.target.dataset.addGroup;
  if (kind==='resp') r.responsibilities.push({title:'New Responsibility Area',weight:'',bullets:[]});
  else r.kpis.push({title:'New KPI Group',bullets:[]});
  r.updatedAt = new Date().toISOString(); persist(); renderEditor(); renderPreview();
}
function removeGroup(e) {
  const r = activeRole(); const kind = e.target.dataset.removeGroup; const idx = Number(e.target.dataset.index);
  if (kind==='resp') r.responsibilities.splice(idx,1); else r.kpis.splice(idx,1);
  r.updatedAt = new Date().toISOString(); persist(); renderEditor(); renderPreview();
}

function renderPreview() {
  const r = activeRole(); if (!r) return;
  const loc = r.location || settings.location;
  const type = r.employmentType || settings.employmentType;
  els.printSheet.innerHTML = `
    <header class="jd-topband">
      <div class="jd-title-wrap">
        <div class="jd-doc-label">${esc(settings.companyName)} — Job Description</div>
        <h2 class="jd-title">${esc(r.title)}</h2>
        <div class="jd-tagline">${esc(settings.tagline)}</div>
      </div>
      <div class="jd-logo-wrap">
        <img class="jd-logo" src="assets/colora-logo-cream-transparent.png" alt="COLORA full logo" />
      </div>
    </header>
    <div class="jd-body">
      <div class="jd-meta-grid">
        ${meta('Department', r.department)}${meta('Reports to', r.reportsTo)}${meta('Level', r.level)}${meta('Employment', type)}
        ${meta('Location', loc)}${meta('Updated', fmtDate(r.updatedAt))}${meta('Brand', settings.companyName)}${meta('Website', settings.website)}
      </div>
      <p class="jd-intro">${esc(r.summary)}</p>

      ${section('Key Responsibilities', r.responsibilities.map(g => subgroup(g.title,g.weight,g.bullets)).join(''))}

      <section class="jd-section">
        <h3 class="jd-section-title">Candidate Requirements</h3>
        <div class="jd-two-col">
          <div class="jd-subgroup"><div class="jd-subhead"><strong>Must Have</strong></div>${bulletList(r.mustHave)}</div>
          <div class="jd-subgroup"><div class="jd-subhead"><strong>Nice to Have</strong></div>${bulletList(r.niceToHave)}</div>
        </div>
      </section>

      ${section('How Success Is Measured', r.kpis.map(g => subgroup(g.title,'',g.bullets)).join(''))}

      <div class="jd-callout">
        <div class="jd-callout-title">More ownership. More exposure. Faster learning.</div>
        <div class="jd-copy">${esc(r.whatYouGet || settings.hiringPromise)}</div>
      </div>

      ${section('Learning & Career Development', `<div class="jd-copy">${esc(r.development)}</div>`)}
      ${section('About COLORA', `<div class="jd-copy">${esc(settings.hiringPromise)}</div><div class="jd-brand-story">${esc(settings.brandStory)}</div>`)}

      <footer class="jd-footer">
        <div><strong>${esc(settings.tagline)}</strong><br>${esc(settings.footerNote)}</div>
        <div style="text-align:right">${esc(settings.website)}<br>${esc(settings.applyEmail)}</div>
      </footer>
    </div>`;
}
function meta(label,value) { return `<div class="jd-meta"><div class="jd-meta-label">${esc(label)}</div><div class="jd-meta-value">${esc(value||'—')}</div></div>`; }
function bulletList(arr=[]) { return `<ul class="jd-list">${(arr||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`; }
function subgroup(title,weight,bullets) { return `<div class="jd-subgroup"><div class="jd-subhead"><strong>${esc(title)}</strong>${weight?`<span class="jd-weight">${esc(weight)}</span>`:''}</div>${bulletList(bullets)}</div>`; }
function section(title, html) { return `<section class="jd-section"><h3 class="jd-section-title">${esc(title)}</h3>${html}</section>`; }

function renderAll() {
  if (!activeRole() && roles.length) activeId = roles[0].id;
  renderRoleList(els.roleSearch.value); renderEditor(); renderPreview();
  const r = activeRole(); document.getElementById('workspaceTitle').textContent = r ? r.title : 'Job Description Builder';
}

function createNewRole() {
  const r = {
    id: crypto.randomUUID(), title: 'New Role', department: 'Department', reportsTo: 'Founder / Manager', level: 'Junior / Middle', location:'', employmentType:'',
    summary: 'Mô tả ngắn mục tiêu và phạm vi của vị trí này tại COLORA.',
    responsibilities: [{title:'Primary Ownership',weight:'',bullets:['Mô tả trách nhiệm chính.']}],
    mustHave:['Yêu cầu bắt buộc.'], niceToHave:['Điểm cộng.'],
    kpis:[{title:'Success Measures',bullets:['KPI / outcome chính.']}],
    development:'Mô tả learning path và hướng phát triển.', whatYouGet:'Mô tả quyền sở hữu, cơ hội học hỏi, training và exposure của vị trí.',
    updatedAt:new Date().toISOString()
  };
  roles.unshift(r); activeId = r.id; persist(); renderAll();
}
function duplicateRole() {
  const r = activeRole(); if (!r) return;
  const copy = structuredClone(r); copy.id = crypto.randomUUID(); copy.title = `${r.title} — Copy`; copy.updatedAt = new Date().toISOString();
  roles.unshift(copy); activeId = copy.id; persist(); renderAll();
}
function deleteRole() {
  const r = activeRole(); if (!r) return;
  if (!confirm(`Xóa JD “${r.title}”?`)) return;
  roles = roles.filter(x=>x.id!==activeId); activeId = roles[0]?.id || null; persist(); renderAll();
}

function exportJSON() {
  const blob = new Blob([JSON.stringify({version:1, exportedAt:new Date().toISOString(), settings, roles}, null, 2)], {type:'application/json'});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `COLORA-JD-Library-${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(a.href);
}
function importJSON(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result); if (!Array.isArray(data.roles)) throw new Error('Invalid format');
      roles = data.roles; settings = {...BRAND_DEFAULTS, ...(data.settings||{})}; applyMigrations(); activeId = roles[0]?.id || null; persist(); renderAll(); alert('Đã nhập dữ liệu JD.');
    } catch { alert('File JSON không đúng định dạng COLORA JD Library.'); }
  };
  reader.readAsText(file);
}

function openSettings() {
  els.settingsForm.innerHTML = `
    <div class="form-grid">
      ${inputSettings('Tên thương hiệu','companyName',settings.companyName)}
      ${inputSettings('Tagline','tagline',settings.tagline)}
      ${inputSettings('Website','website',settings.website)}
      ${inputSettings('Email ứng tuyển','applyEmail',settings.applyEmail)}
      ${inputSettings('Địa điểm mặc định','location',settings.location)}
      ${inputSettings('Loại hình mặc định','employmentType',settings.employmentType)}
    </div>
    ${inputSettings('Brand story','brandStory',settings.brandStory,'textarea')}
    ${inputSettings('Hiring promise / Employee Value Proposition','hiringPromise',settings.hiringPromise,'textarea')}
    ${inputSettings('Footer note','footerNote',settings.footerNote,'textarea')}`;
  els.settingsModal.hidden = false;
}
function inputSettings(label,key,val,type='text') { return `<div class="field"><label>${esc(label)}</label>${type==='textarea'?`<textarea data-setting="${key}">${esc(val||'')}</textarea>`:`<input data-setting="${key}" value="${esc(val||'')}" />`}</div>`; }
function saveSettings() {
  els.settingsForm.querySelectorAll('[data-setting]').forEach(el => settings[el.dataset.setting] = el.value);
  persist(); renderPreview(); els.settingsModal.hidden = true;
}
function resetBrand() { if (confirm('Khôi phục toàn bộ Brand settings về mặc định?')) { settings = structuredClone(BRAND_DEFAULTS); persist(); openSettings(); renderPreview(); } }

function setMode(mode) {
  editMode = mode; document.body.classList.toggle('preview-only', mode==='preview');
  document.querySelectorAll('.seg-btn').forEach(b=>b.classList.toggle('active', b.dataset.mode===mode));
}
function printPDF() {
  const oldTitle = document.title; const r = activeRole(); document.title = `COLORA - ${r?.title || 'Job Description'}`;
  window.print(); setTimeout(()=> document.title = oldTitle, 500);
}

// Events
document.getElementById('newRoleBtn').addEventListener('click', createNewRole);
document.getElementById('duplicateBtn').addEventListener('click', duplicateRole);
document.getElementById('deleteBtn').addEventListener('click', deleteRole);
document.getElementById('printBtn').addEventListener('click', printPDF);
els.roleSearch.addEventListener('input', e => renderRoleList(e.target.value));
document.querySelectorAll('.seg-btn').forEach(btn=>btn.addEventListener('click',()=>setMode(btn.dataset.mode)));
document.getElementById('settingsBtn').addEventListener('click', openSettings);
document.getElementById('closeSettingsBtn').addEventListener('click',()=>els.settingsModal.hidden=true);
document.getElementById('saveSettingsBtn').addEventListener('click', saveSettings);
document.getElementById('resetBrandBtn').addEventListener('click', resetBrand);
document.getElementById('exportDataBtn').addEventListener('click', exportJSON);
document.getElementById('importDataInput').addEventListener('change', e => { if (e.target.files[0]) importJSON(e.target.files[0]); e.target.value=''; });
els.settingsModal.addEventListener('click', e => { if (e.target === els.settingsModal) els.settingsModal.hidden = true; });

renderAll();
